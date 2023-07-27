const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const msgSchema = new Schema({
     sender: {
          type: String,
          required: true,
     },
     chatId: {
          type: String,
          required: true,
     },
     text: {
          type: String, 
          required: true,
     }
},
     {
          timestamps: true,
     }
)

module.exports= mongooose.model('Message',msgSchema);
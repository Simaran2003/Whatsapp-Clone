const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const convoSchema = new Schema({
     members: {
          type: []
     }},
     {
          timestamps: true
     }
)

const convo = mongoose.model('convo', convoSchema);
module.exports = convo;
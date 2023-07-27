const msgModel = require('../model/message');

const newMsg = async (req, res) => { 
     try {
          const newMessage = new msgModel(req.body);
          await newMessage.save();
          res.status(200).send({message:'New message added to db successfully'});
     } catch (err) {
          res.status(500).send({message:'Error while adding new message to db',error:err});
     }
}

module.exports={newMsg}
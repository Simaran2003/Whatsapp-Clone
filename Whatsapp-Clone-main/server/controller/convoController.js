const ConversationModel=require('../model/convo');

const Conversation = async(req, res) => {
     try {
          if (req.body.senderId && req.body.receiverId) {
               const senderId = req.body.senderId;
               const receiverId = req.body.receiverId;
    
               const exists = await ConversationModel.findOne({ members: { $all: [receiverId,senderId]}})
               if (exists) { 
                    return res.send('Conversation already exists')
               }

               const convo = new ConversationModel({
				members: [senderId, receiverId],
			});
               await convo.save();
               res.status(200).send({message:"Conversation created successfully",data:convo});
          } else {
               res.status(400).send({
                    message: "Invalid request"
               });
          }
     } catch (err) {
          res.status(500).send(err)
     }
}

const getConvo = async (req, res) => { 
     try {
          const obj = await ConversationModel.findOne({
			$all: [req.body.receiver, req.body.sender],
		});
          if (!obj) {
               return res.status(404).send({ message: "Conversation not found" });}
          res.status(200).json({message:"Conversation found successfully",data:obj});
     } catch (err) {
          res.status(500).send(err)
     }
}

module.exports = {Conversation,getConvo};
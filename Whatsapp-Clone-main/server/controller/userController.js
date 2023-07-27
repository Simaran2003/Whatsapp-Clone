const User=require('../model/user');

const addUser = async (req, res) => { 
     try {
          const user = new User(req.body);
          let existingUser=await User.findOne({googleId:user.googleId});
          if (existingUser){
               return res.status(200).send('User already exists')}
          await user.save();
          res.status(200).send('User added successfully');
     } catch (error) {
          res.status(500).send(error);
     }
}

const getUsers = async (req, res) => { 
     try {
          const users = await User.find();
          res.status(200).send(users);
     } catch (error) {
          res.status(500).send(error);
     }
}

module.exports ={ addUser,getUsers};
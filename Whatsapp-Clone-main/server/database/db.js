const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Connection = async() => {
     try {
         await mongoose.connect(process.env.URL, {useUnifiedTopology: true, useNewUrlParser: true});
         console.log("Database connected successfully");
     } catch (err) {
          console.log("Couldn't connect to database",err);
     }
}

module.exports = Connection;
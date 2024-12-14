const mongoose = require("mongoose");
const connectDB = async()=>{
    if(!process.env.MONGO_URI){
        console.error('Error: MONGO_URI is not define in .env file.');
        process.exit(1);
    }
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.error(`Database Connection : ${error.message}`);
    }
};
module.exports = connectDB;
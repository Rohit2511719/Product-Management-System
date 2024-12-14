const express  = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const cors = require("cors");
const path = require("path");
// load environment variable from .env file
dotenv.config();

// connect to the database
connectDB();
const app = express();
//middleware for parsing json
app.use(express.json());

app.use(cors());

// here define below all routes
const adminroutes = require('./routes/adminroutes');
app.use('/admin', adminroutes);
//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
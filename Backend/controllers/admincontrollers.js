const Admin = require("../models/adminmodels");
const signupAdmin = async(req, res)=>{
    try{
        const{name, email, password} = req.body;
        // create a new admin
        const admin = new Admin({name, email, password});
        await admin.save();
        res.status(201).json({message:"Admin Signup Sucessfully:", admin:admin});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Internal Server Error"})
    }
};
// login api
const loginAdmin = async (req, res)=>{
    try{
        const {email,password}=req.body;
        // check if the user exist
        const admin = await Admin.findOne({email});
        if(!admin){
            return res.status(404).json({message:"Admin not Found"});
        }
        if(admin.password !== password){
            return res.status(404).json({message:"Invalid Crendtial"});
        }
        res.status(200).json({message:"Login Successfull",Admin: admin});
    }catch(error){
        console.error("error during login", error);
        res.status(500).json({message:"Internal Server Error"});
    }
};
module.exports= {signupAdmin, loginAdmin};
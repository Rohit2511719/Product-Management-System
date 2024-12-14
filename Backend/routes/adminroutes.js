const express = require("express");
const {signupAdmin}= require("../controllers/admincontrollers");
const {loginAdmin} = require("../controllers/admincontrollers");
const router = express.Router();
// admin signup router
router.post('/signup', signupAdmin);
// admin login routes
router.post('/login', loginAdmin)
module.exports=router;
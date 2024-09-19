const express=require('express')
const router=express.Router()
const User=require('../model/User.js')
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
require('dotenv').config();
const fetchuser=require('../middleware/FetchUser.js')

/* router.get('/',(req,res)=>{
    obj={
        a:"hello",
        b:"hi"
    }
    res.send(obj)
}) */

    const jwtkey = process.env.JWT_SECRET;
    console.log('jwtKey:', jwtkey);


//creating user with usig post "api/auth/createuser"
router.post("/createuser",[
        // username must be an email
        body('name').isLength({min:3}),
        body('email').isEmail(),
        // password must be at least 5 chars long
        body('password').isLength({ min: 5 }),
], async(req, res) => {
    /* console.log(req.body);
    res.send(req.body)
    const user=User(req.body)
    user.save() */
    const errors = validationResult(req);
    
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
try{


    let user=await User.findOne({email:req.body.email})
    if (user){
        return res.status(400).json({error:"user alreadyyyy"});
    }
    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password, salt);
    user=await User.create({
        name: req.body.name,
        email:req.body.email,
        password: secPass
      })

const data={
    user:{
        id:user.id
    }
}
      const authToken=jwt.sign(data, jwtkey);
      
      console.log(authToken);
      
      
      res.json({user,authToken})

    }catch(error){
res.status(500).json({error:"internalserver error"})
    }
})
//logon user with usig post "api/auth/createuser"
router.post("/login",[
    // username must be an email
    
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
], async(req, res) => {
    const errors = validationResult(req);
    
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
const {email,password}=req.body

try {
    let user=await User.findOne({email})
    if(!user){
        return res.status(400).json({
            errors:"invalid"
        })

    }
    const passwordCompare=await bcrypt.compare(password,user.password)
if(!passwordCompare){
    return res.status(400).json({
            errors:"invalid"
})
}
const data={
    user:{
        id:user.id
    }
}
      const authToken=jwt.sign(data,jwtkey)
      
      console.log(authToken);
      
      
      res.json({user,authToken})



} catch (error) {
    res.status(500).json({error:"internalserver error"})
}
})
//get users

router.get('/getuser', fetchuser, async(req,res)=>{
    try {
        const userId= req.user.id;
        const user=await User.findById(userId).select("-password")
        res.send(user)

    } catch (error) {
        res.status(500).json({error:"internalserver error"})
        //res.status(500).send("internalserver error")

    }
})

module.exports=router
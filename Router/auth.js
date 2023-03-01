const express = require('express')
const router = express.Router();
require('../DB_connection/DB')
const User = require('../Model/users')

router.get('/', (req, res) => {
    res.send('Hello From the Router...')
})
router.post('/register', (req, res) => {
    const { Name, email, phone, password } = req.body
    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.json({ 'Message': "Email Already Exist" })
            }
            const user = new User({ Name, email, phone, password })
            user.save().then(() => {
                res.status(201).json({
                    "message": "User Register Successfully"
                })
            }).catch((error) => {
                res.status(500).json({
                    "error": "Failed To register"
                })
            })
        }).catch(err => { console.log(err); })
})
router.post('/login',async (req,res)=>{
    try{
        const{email,password}=req.body
        if(!email || !password){
            return res.status(400).json({
                "message":"Please fill the data"  
            })
        }
        const userLogin = await User.findOne({email:email})
        if(!userLogin){
            res.status(400).json({message:"Error in Login"})
        }else{
            res.json({message:"Login Sucessful"}) 

        }
    }catch (err){
        console.log(err);
    }
})




module.exports = router;
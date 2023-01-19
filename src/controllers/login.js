const jwt = require('jsonwebtoken')
const argon2 = require('argon2');
const SECRET = "nothing is secreat"

const User = require('../models/user.model')

const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email && !password){
            return res.send('not found')
        }
        const verification = await User.findOne({email});
        if(!verification) return res.send('Invilid crediential');
        if(argon2.verify(verification.hash,password)){
            // console.log(verification)
            let token = jwt.sign({email,id:verification._id},SECRET,{expiresIn:"7d"})
            res.send({msq:"sucessfully login",token})
        }else{
            return res.send('Invilid credietial')
        }
    
     
    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = login;
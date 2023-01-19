const jwt = require('jsonwebtoken')
const argon2 = require('argon2');

const User = require('../models/user.model')

const register = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email && !password){
            return res.send('not found')
        }
        const verification = await User.find({email});
        if(verification.length==1) return res.send('already exits');
        const hash = await argon2.hash(password);
        const newUser = new User({email,hash});

        await newUser.save();

        res.status(201).send({msq:"user created sucessfully"})

    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = register;
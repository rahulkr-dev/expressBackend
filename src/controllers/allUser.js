const jwt = require('jsonwebtoken')
const argon2 = require('argon2');

const User = require('../models/user.model')

const allUser = async(req,res)=>{
    try{
      const user = await User.find();
      res.send(user)

    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = allUser;
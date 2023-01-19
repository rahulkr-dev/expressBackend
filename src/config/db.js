const mongoose = require('mongoose')
const DB_URL= `mongodb+srv://r:f@cluster0.cyy5u.mongodb.net/fw190480-mock11?retryWrites=true&w=majority`
const config = async()=>{
    await mongoose.connect(DB_URL)
}

module.exports = config
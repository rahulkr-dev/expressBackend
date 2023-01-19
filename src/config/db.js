const mongoose = require('mongoose')
const DB_URL= `mongodb+srv://r:f@cluster0.cyy5u.mongodb.net/fw190480-mock11?retryWrites=true&w=majority`
const config = async()=>{
    amongoose.set("strictQuery", false);
    mongoose.connect(DB_URL,{useNewUrlParser: true})
}

module.exports = config
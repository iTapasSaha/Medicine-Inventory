const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/med-shop');

const medSchema = new mongoose.Schema({
    medNo: String,
    name:String,
    quantity: Number,
    price: Number
  })
  
  const Med= mongoose.model("Med",medSchema)

  module.exports= Med;
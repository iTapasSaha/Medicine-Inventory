const mongoose = require('mongoose')
const Med= require ("./meds")
mongoose.connect('mongodb://localhost:27017/med-shop');

const Vicodin = new Med({
    medNo: "med1",
    name: "Vicodin",
    quantity: 500,
    price: 50
  })
  
  const Albuterol=new Med({
    medNo: "med2",
    name: "Albuterol",
    quantity: 600,
    price: 10
  })
  const Lisinopril=new Med({
    medNo: "med3",
    name: "Lisinopril",
    quantity: 800,
    price: 60
  })
  const Levothyroxine= new Med({
    medNo: "med4",
    name: "Levothyroxine",
    quantity: 700,
    price: 30
  })
  const Gabapentin=new Med({
    medNo: "med5",
    name: "Gabapentin",
    quantity: 200,
    price: 80
  })
  const Amlodipine= new Med({
    medNo: "med6",
    name: "Amlodipine",
    quantity: 300,
    price: 40
  })
  Med.insertMany([Vicodin,Albuterol,Lisinopril,Levothyroxine,Gabapentin,Amlodipine],function(err){
    if(err){
      console.log(err);
    }else{
      console.log("successfully entered data");
    }
  })
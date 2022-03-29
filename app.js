const express = require('express')
const bodyParser= require ("body-parser")
const path = require ("path")
const mongoose = require('mongoose')
const Med= require ("./meds")
const { ServerDescription } = require('mongodb')
const app = express()
const port = 3000
app.set('view engine','ejs')


mongoose.connect('mongodb://localhost:27017/med-shop');

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/Meds_handling/index.html")
})

// app.get('/all-seeds',(req,res)=>{
//   seeds.find().then((result)=>{
//     res.send(result);
//   })
// })

app.get("/form", async (req,res)=>{
  const name= await req.query.name;
  const medicine = await req.query.medSelect;
  const quantity = await req.query.qnt;
  const list= await Med.findOne({medNo: medicine})
  console.log(list);
  // const medName= list.Med.name
  const medName=list['name']
  const rate= list['price']
  res.render("index2",{kindOfName: name,kindOfMed: medName,kindOfQt: quantity,kindOfPrice: rate})

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
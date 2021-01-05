const express = require("express");
require('./db/conn');
const Message = require('./models/messages');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname , "../public");
const views_path = path.join(__dirname , "../template/views");
const partial_path = path.join(__dirname , "../template/partials");



app.use(express.static(static_path));
app.set("view engine", 'hbs');
app.set("views", views_path);
hbs.registerPartials(partial_path);
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))



app.get('/' , (req,res)=>{
    res.render("index");
})
app.get('/contact' , (req,res)=>{
    res.render("contact");
})
// create messages in our database
app.post('/contact', async(req,res) =>{
try{
  const incmessages = new Message({
      name: req.body.name,
      subject: req.body.subject,
      email: req.body.email,
      message: req.body.message
  })
  const messageData = await incmessages.save();
  res.status(201).render('index')

}catch(e){
   res.status(400).send(e)
}
})

app.get('/',(req,res)=>{
    res.send("Hello from servere side")
})

app.listen(port,() =>{
    console.log(`app is listening on port no ${port}`)
});
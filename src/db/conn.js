const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URI || "mongodb://localhost:27017/portfolio-messages", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(()=>{
    console.log("connected to db")
}).catch((e) =>{
    console.log(e)
});

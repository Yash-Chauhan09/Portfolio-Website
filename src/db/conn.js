const mongoose = require("mongoose");
// const DATABASE_URL = 'mongodb://yashchauhan:mymessagesport@portfolio-message-shard-00-00.kliut.mongodb.net:27017,portfolio-message-shard-00-01.kliut.mongodb.net:27017,portfolio-message-shard-00-02.kliut.mongodb.net:27017/portfolio-messages?ssl=true&replicaSet=atlas-3cf4r0-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost:27017/portfolio-messages", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(()=>{
    console.log("connected to db")
}).catch((e) =>{
    console.log(e)
});

// mymessagesport
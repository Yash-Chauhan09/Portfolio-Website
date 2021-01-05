const mongoose = require("mongoose");
const validator = require("validator");

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  subject: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email!!");
      }
    },
  },
  message:{
    type: String,
  }
});

const Message = new mongoose.model('Message',messageSchema);

module.exports = Message;

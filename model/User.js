const mongoose = require('mongoose');
const db = require('./conn').db
const userSchema = new mongoose.Schema({
  name: 
  { 
    type: String, 
  },
  email: 
  { 
    type: String, 
  },
  phoneNumber: { type: String},
  age: { type: Number},
});


const User = mongoose.model('user', userSchema);
module.exports = {User}


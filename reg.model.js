const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const regSchema = new Schema({
  firstname: { type: String, required: true },
  lastname:{type:String,required:true},
  password: { type: String, required: true },
  email: { type: String, required: true },
  organisation: { type:String, required: true },
}, {
  timestamps: true,
});

const User = mongoose.model('User', regSchema);

module.exports = User;
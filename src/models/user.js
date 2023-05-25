const { Schema, model, Types } = require("mongoose")

const UserSchema = new Schema({
  email: { type: String },
  password: { type: String },
  created_at: { type: Date, default: Date.now },
});

const UserModel = model('user', UserSchema);

module.exports = {UserModel};
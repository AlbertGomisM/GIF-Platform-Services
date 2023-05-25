const { Schema, model, Types } = require("mongoose")

const GifSchema = new Schema({
  name: { type: String },
  username: { type: String },
  url: {type: String},
  category: {type: String},
  created_at: { type: Date, default: Date.now },
});

const GifModel = model('gif', GifSchema);

module.exports = {GifModel};
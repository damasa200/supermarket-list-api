const mongoose = require('mongoose')

const ListItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  checked: Boolean,
});


module.exports = mongoose.model("list_items", ListItemSchema);


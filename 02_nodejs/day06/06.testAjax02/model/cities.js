var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var citiesSchema = new Schema({
  code: String,
  province: String,
  city: String,
  county: String,
  level: Number,
  name: String
})
var Cities = mongoose.model('Cities', citiesSchema);
module.exports = Cities;
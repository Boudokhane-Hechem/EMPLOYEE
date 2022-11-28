const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
   username: {
    type: String,
    required: true
   }, 
   password: {
    type: String,
    required: true
   }
});

const Owner = mongoose.model('Owner', ownerSchema);
 
module.exports = Owner;
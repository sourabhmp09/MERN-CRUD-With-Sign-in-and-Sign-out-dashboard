const mongoose = require('mongoose');
const moment = require('moment');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId:String,
    company:String,
    
      createdAt: {
        type: String,
        default: moment().format("DD/MM/YYYY") + " ;"+ moment().format("hh:mm:ss")
    },
});

module.exports = mongoose.model("products", productSchema);

















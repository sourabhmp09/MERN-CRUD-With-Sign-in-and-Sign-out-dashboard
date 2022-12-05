const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const moment = require('moment');
const userSchema = new mongoose.Schema({
    name: String,

    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"]
    
       
    },
    createdAt: {
        type: String,
        default: moment().format("DD/MM/YYYY") + "   ;"+ moment().format("hh:mm:ss")
    },
});


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });


module.exports = mongoose.model("users", userSchema);





const mongoose= require('mongoose');
// mongoose.connect("mongodb://localhost:27017/e-commerce")


mongoose
  .connect("mongodb://localhost:27017/e-commerce", {

    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected with mongodb server Api testing");
  }).catch((err)=>{console.log(err )})
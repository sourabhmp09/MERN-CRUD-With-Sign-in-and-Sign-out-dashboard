const express = require("express")
const cors = require('cors')
require('./db/confi')
const Jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const JwtKey = '1dj6snyy396';


const app = express();
app.use(cors());

const User = require("./db/User")
const Product = require('./db/Product')
app.use(express.json());



app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    Jwt.sign({ result }, JwtKey, { expiresIn: "5d" }, (err, token) => {
        if (err) {
            res.send({ result: "Something went wrong" })
        }
        res.send({ result, auth: token })
    })

})


app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (req.body.password && req.body.email) {
        let user = await User.findOne({email}).select("+password");


       const isPasswordMatched =  await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
        
          res.status(400).json({msg: "Incorrect password."})
        }


        if (user) {
            Jwt.sign({ user }, JwtKey, { expiresIn: "5d" }, (err, token) => {
                if (err) {
                    res.send("Something went wrong")
                }
                res.send({ user, auth: token })
            })
        } else {
            res.send({ result: "No User found" })
        }
    } else {
        res.send({ result: "No User found" })
    }
});

//// For Product Create
app.post("/add-product", verifyToken, async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
});

//// For Product find
app.get("/products", verifyToken, async (req, res) => {
    const products = await Product.find();
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send({ result: "No Product found" })
    }
});

//// For Product Delete
app.delete("/product/:id", verifyToken, async (req, res) => {
    let result = await Product.deleteOne({ _id: req.params.id });
    if (result) {
        res.send(result)
    } else {
        res.send({ "result": "No Record Found." })
    }
}),

//// For Product Find By Id
 app.get("/product/:id", verifyToken, async (req, res) => {
        let result = await Product.findOne({ _id: req.params.id })
        if (result) {
            res.send(result)
        } else {
            res.send({ "result": "No Record Found." })
        }
    })
//// For Product Update
app.put("/product/:id", verifyToken, async (req, res) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(result)
});

app.get("/search/:key", verifyToken, async (req, res) => {
    let result = await Product.find({
        "$or": [
            {
                name: { $regex: req.params.key }
            },
            {
                company: { $regex: req.params.key }
            },
            {
                category: { $regex: req.params.key }
            }
        ]
    });
    res.send(result);

})


function verifyToken(req, res, next) {
    let token = req.headers['authorization'];

    if (token) {

        //console.log("middilewere in if", token);
        Jwt.verify(token, JwtKey, (err, valid) => {
            if (err) {
                res.status(401).send({ result: "please provide valid token" });
            } else {
                next();

            }
        })




    } else {
        { res.status(403).send({ result: "please add token with header" }) }
    }
   // console.log("middilewere in ", token);


}




app.listen(5000, () => { console.log(`server is working on 5000`) })




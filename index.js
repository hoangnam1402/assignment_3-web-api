const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/* const mongoose = require('mongoose'); */

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hello');
})

const Products = [{
    imageLink:"http://mvbinz.xyz/images/1.jpg",
    name:"Rayon a-line Dress",
    price: "13.45", 
    type: "Orther",
},];

// set api
app.get('/products',(req,res)=>{
    res.status(200).json({products:Products})
})

app.post('/products',(req,res)=>{
    const product = req.body;

    console.log(product);
    Products.push({product});

    res.status(201).json({mess: "Products is added to the database"})
})

// connect Database


app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`)
})
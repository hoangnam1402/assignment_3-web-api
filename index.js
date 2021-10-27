const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/* const mongoose = require('mongoose'); */

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get('/',(req, res) =>{
    res.send('Welcome');
})

require('./app/products')(app);

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`)
})
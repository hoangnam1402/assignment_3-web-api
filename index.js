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

require('./app/routes')(app);

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`)
})
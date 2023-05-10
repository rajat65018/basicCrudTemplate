require('dotenv').config({ override: true });
const express = require('express');
const dbconnect = require('./app/startup/dbconnect');
const { PORT } = require('./config');
const router = require('./app/routes/router');
const app = express();
app.use(express.json());
app.use(router);
dbconnect().then((val)=>{
    app.listen(PORT,()=>{
        console.log('server running');
    })
}).catch((err)=>{
    console.log(err);
})
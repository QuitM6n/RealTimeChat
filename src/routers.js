"use strict";

import {getData} from './server.js';
import express from 'express';

const app = express();
const router = express.Router();
const PORT = 8070;

app.use(express.static('/home/ruslan/Desktop/JsApp/public'));

app.post('/api/data',(req,res,next) =>{
    let inputValue = req.body.password;
    let name  = req.body.name;
    res.status(200);
});

app.listen(PORT,(error) => {
    if(!error){
        console.log('Connected to server success');
    }else{
        console.log('Error occurred,server cannot start: ',error);
    }
});
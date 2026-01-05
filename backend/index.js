const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;


app.listen(PORT,()=>{
    console.log('Backend server is running on port' + PORT);
    mongoose.connect(uri);
    console.log('Connected to MongoDB');
})
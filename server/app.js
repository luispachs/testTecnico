require('dotenv').config();
const {Sequelize}= require('sequelize');
const express = require('express');
const categories = require('./Controllers/Categories');
const subcategories = require('./Controllers/Subcategories');
const themes = require('./Controllers/Themes');
const cors =require('cors');

const app = express();
let PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/categories',categories);
app.use('/api/subcategories',subcategories);
app.use('/api/themes',themes);

app.get('/',(req,res)=>{
    res.send('home')
})


app.listen(PORT,()=>{
    console.log(`Server in running on http://localhost:${PORT}`)
})
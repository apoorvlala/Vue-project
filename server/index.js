const express = require('express')
const mongoose = require('mongoose');
const api = require('./routes/api')
const cors = require('cors');
const app = express();
const env = require('dotenv');
env.config();
mongoose.connect(process.env.DB_CONNECT_LOCAL,{
    useNewUrlParser:true , useUnifiedTopology:true
} , ()=>{ console.log('Db connected...')})


app.use(cors());
app.use(express.json());
app.use('/api',api);
const port = process.env.PORT || 5000;
app.listen(port , ()=>console.log(`Server started on port ${port}`));
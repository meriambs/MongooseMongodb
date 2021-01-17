const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//middelwar thing to execute things while we enter an other page 
//import routes

// you can create routes
app.get('/', (req,res)=>{
    res.send('heyyy test home ')
}); 
//**********/ connect


//*********Install and setup mongoose::
dotenv.config({path:__dirname + '/config/.env'});
mongoose.connect(process.env.MONGO_URI,{useFindAndModify: false,
     useNewUrlParser: true, 
     useUnifiedTopology: true}).then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log("not connected")
})

//how to startl listen 
app.listen(3256);
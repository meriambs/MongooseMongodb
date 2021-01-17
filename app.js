const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const personRouter = require ('./routes/Person')
//middelwar thing to execute things while we enter an other page 
//import routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
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
//routes
app.use('/users', personRouter);
//how to startl listen 
app.listen(3000);
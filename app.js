const express = require('express');
const app = express();
const connectToMongo = require('./db');
const cors = require('cors')
require('dotenv').config()
app.use(express.json());
app.use(cors())
app.use('/api/auth',require('./Routes/authentication'));
app.use('/api/investor',require('./Routes/investor'));
let port = 5000;
connectToMongo();
app.get("/",(req,res)=>{
    res.send("Started");
})

//Intializing the application
app.listen(port || process.env.PORT, () => {
    console.log(`app listening on port ${port}`)
  })
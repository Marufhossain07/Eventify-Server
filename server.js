const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()
const app = express()
const {connectToDatabase} = require('./config/db');
const eventRoute = require('./routes/eventRoute');


app.use(cors())
app.use(express.json())


connectToDatabase()

app.use('/event', eventRoute)


app.get('/', (req,res)=>{
    res.send('server is running')
})

app.listen(port, ()=>{
    console.log(`the server is running on ${port}`);
})

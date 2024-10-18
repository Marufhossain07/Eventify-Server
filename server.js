const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()
const app = express()
const { connectToDatabase } = require('./config/db');
const eventRoute = require('./routes/eventRoute');
const userRoute = require('./routes/userRoute');
const confirmEventRoute = require('./routes/cofirmEventRoute');
const galleryRoute = require('./routes/galleryRoute');
const reviewRoute = require('./routes/reviewRoute');

app.use(cors())
app.use(express.json())


connectToDatabase()

app.use('/', userRoute, eventRoute)
app.use('/', confirmEventRoute,galleryRoute)
app.use('/', reviewRoute)

app.get('/', (req, res) => {
    res.send('server is running')
})

app.listen(port, () => {
    console.log(`the server is running on ${port}`);
})


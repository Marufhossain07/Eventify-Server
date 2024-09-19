const { getDatabase } = require("../config/db")




const getEvent = async(req,res)=>{
    const db = getDatabase()
    const eventCollection = db.collection('events')
    const eventData = await eventCollection.find().toArray()
    res.send(result)
}

const postEvent = async (req,res)=>{
    const db = getDatabase()
    const eventCollection = db.collection('events')
    const newEvent = req.body;
    const addEvent = await eventCollection.insertOne(newEvent)
    res.send(addEvent)
}

module.exports={
    getEvent,
    postEvent
}
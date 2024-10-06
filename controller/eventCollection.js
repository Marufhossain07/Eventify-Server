const { ObjectId } = require("mongodb")
const { getDatabase } = require("../config/db")




const getEvent = async(req,res)=>{
    const db = getDatabase()
    const eventCollection = db.collection('events')
    const eventData = await eventCollection.find().toArray()
    
    res.send(eventData)
}

const getIdEvent = async(req,res)=>{
    const db = getDatabase()
    const id = req.params._id
    // console.log(id);
    
    const query = { _id: new ObjectId(id) }
    const eventCollection = db.collection('events')
    const eventData = await eventCollection.findOne(query)
    
    res.send(eventData)
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
    getIdEvent,
    postEvent
}
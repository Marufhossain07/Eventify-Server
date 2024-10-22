const { ObjectId } = require("mongodb")
const { getDatabase } = require("../config/db")




const getEvent = async(req,res)=>{
    const db = getDatabase()
    const eventCollection = db.collection('events')
    const eventData = await eventCollection.find().toArray()
    res.send(eventData)
}

const getEventByID = async (req, res) => {
    try {
        const db = getDatabase();
        const id = req.params._id;

        // Check if id is a valid ObjectId before querying
        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ message: 'Invalid ID format' });
        }

        const query = { _id: new ObjectId(id) };
        const eventCollection = db.collection('events');
        const eventData = await eventCollection.findOne(query);

        console.log(id, eventData);

        if (!eventData) {
            return res.status(404).send({ message: 'Event not found' });
        }

        res.send(eventData);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
};



const postEvent = async (req,res)=>{
    const db = getDatabase()
    const eventCollection = db.collection('events')
    const newEvent = req.body;
    const addEvent = await eventCollection.insertOne(newEvent)
    res.send(addEvent)
}

const deleteEvent = async(req,res)=>{
    const db = getDatabase()
    const eventCollection = db.collection('events')
    const id = req.params.id
    const query = { _id: new ObjectId(id)}
    const result = await eventCollection.deleteOne(query)
    res.send(result)
}

module.exports={
    getEvent,
    getEventByID,
    postEvent,
    deleteEvent
}
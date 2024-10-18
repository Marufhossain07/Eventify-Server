const { getDatabase } = require("../config/db")
const { ObjectId } = require("mongodb")

const getConfirmEvent = async (req, res) => {
    const db = getDatabase()
    const eventCollection = db.collection('confirmEvents')
    const confirmEventData = await eventCollection.find().toArray()
    res.send(confirmEventData)
}

const updateEventData = async (req, res) => {
    const db = getDatabase();
    const eventCollection = db.collection('confirmEvents');

    const id = req.params.id;
    const BookData = req.body;
    console.log(id, BookData);

    const query = { _id: new ObjectId(id) };
    const options = { upsert: true };

    const updateDoc = {
        $set: {
            ...BookData,
        },
    };

    const result = await eventCollection.updateOne(query, updateDoc, options);

    res.send(result);
};

const getEmailConfirmEvent = async (req, res) => {
    const db = getDatabase()
    const email = req.params.email;
    // console.log(email);
    const query = { email: email };
    const eventCollection = db.collection('confirmEvents')
    const confirmEventData = await eventCollection.find(query).toArray();
    res.send(confirmEventData)
}

const postConfirmEvent = async (req, res) => {
    const db = getDatabase()
    const eventCollection = db.collection('confirmEvents')
    const newConfirmEvent = req.body;
    const addNewEvent = await eventCollection.insertOne(newConfirmEvent)
    res.send(addNewEvent)
}

const getCompletedEvents= async(req,res)=>{
    const db = getDatabase()
    const eventCollection = db.collection('confirmEvents')
    const email = req.params.email;
    const query = { 
        email:email,
        payment: 'Advance_Done'
    };
    const result = await eventCollection.find(query).toArray()
    res.send(result)
}

module.exports = {
    postConfirmEvent,
    getConfirmEvent,
    getEmailConfirmEvent,
    updateEventData,
    getCompletedEvents
}
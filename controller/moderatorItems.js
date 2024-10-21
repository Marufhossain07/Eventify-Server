const { getDatabase } = require("../config/db")
// const { ObjectId } = require("mongodb")

const getItems = async (req, res) => {
    const db = getDatabase();
    const itemsCollection = db.collection('eventItems');
    
    // Find documents where event is not 'completed'
    const result = await itemsCollection.find({ event: { $ne: 'completed' } }).toArray();
    
    res.send(result);
}


const postRequiredItems = async (req, res) => {
    const db = getDatabase()
    const eventItems = db.collection('eventItems')
    const newEventItems = req.body;
    const addEventItems = await eventItems.insertOne(newEventItems)
    res.send(addEventItems)
}

const updateRequiredItems = async (req, res) => {

    const db = getDatabase();
    const eventItems = db.collection('eventItems');
    const selectedEvent = req.params.selectedEvent;
    const updatedEventItems = req.body;
    const filter = { selectedEvent: selectedEvent };
    const updateDoc = {
        $set: updatedEventItems,
    };
    const result = await eventItems.updateMany(filter, updateDoc);
    res.send({ message: 'Event items updated successfully', result })
};


module.exports = {
    getItems,
    postRequiredItems,
    updateRequiredItems
}
const { getDatabase } = require("../config/db")
// const { ObjectId } = require("mongodb")

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

    // console.log(selectedEvent);
    // console.log(updatedEventItems);


    const filter = { selectedEvent: selectedEvent };
    const updateDoc = {
        $set: updatedEventItems,
    };


    const result = await eventItems.updateMany(filter, updateDoc);
    // console.log(result);
    
    res.send({ message: 'Event items updated successfully', result })
};


module.exports = {
    postRequiredItems,
    updateRequiredItems
}
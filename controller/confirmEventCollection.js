const { getDatabase } = require("../config/db")

const getEmailConfirmEvent = async(req,res)=>{
    const db = getDatabase()
    const email = req.params.email;
    // console.log(email);
    const query = { email: email };
    const eventCollection = db.collection('confirmEvents')
    const confirmEventData = await eventCollection.find(query).toArray();
    res.send(confirmEventData)
}

const postConfirmEvent = async (req,res)=>{
    const db = getDatabase()
    const eventCollection = db.collection('confirmEvents')
    const newConfirmEvent = req.body;
    const addNewEvent = await eventCollection.insertOne(newConfirmEvent)
    res.send(addNewEvent)
}

module.exports={
    postConfirmEvent,
    getEmailConfirmEvent
}
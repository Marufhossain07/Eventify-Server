const { getDatabase } = require("../config/db")



const postConfirmEvent = async (req,res)=>{
    const db = getDatabase()
    const eventCollection = db.collection('confirmEvents')
    const newConfirmEvent = req.body;
    const addNewEvent = await eventCollection.insertOne(newConfirmEvent)
    res.send(addNewEvent)
}

module.exports={
    postConfirmEvent,
}
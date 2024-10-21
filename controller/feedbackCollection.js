const { getDatabase } = require("../config/db")

const getFeedback = async (req,res)=>{
    const db = getDatabase()
    const feedbackCollection = db.collection('feedback')
    const result = await feedbackCollection.find().toArray()
    res.send(result)
}

const postFeedback = async(req,res)=>{
    const db = getDatabase()
    const feedbackCollection = db.collection('feedback')
    const data = req.body;
    const result = await feedbackCollection.insertOne(data)
    res.send(result)
}

module.exports={
    getFeedback,
    postFeedback
}
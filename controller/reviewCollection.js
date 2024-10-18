const { ObjectId } = require("mongodb")
const { getDatabase } = require("../config/db")

const getReview = async (req, res) => {
    const db = getDatabase()
    const reviewCollection = db.collection('reviews')
    const result = await reviewCollection.find().toArray()
    res.send(result)
}

const addReview = async (req, res) => {
    const db = getDatabase()
    const reviewCollection = db.collection('reviews')
    const eventCollection = db.collection('confirmEvents')
    const newReview = req.body;
    const filter = { _id: new ObjectId(newReview.eventId) };
    const updateDoc = {
        $set: {
            review: true
        }
    }
    const options = { upsert: true }
    const updatedEvent = await eventCollection.updateOne(filter, updateDoc, options)
    const result = await reviewCollection.insertOne(newReview);
    res.send(result)
}

const getReviewByEmail = async (req, res) => {
    const db = getDatabase()
    const reviewCollection = db.collection('reviews')
    const email = req.params.email;
    const query = {
        user_email: email
    }
    const result = await reviewCollection.find(query).toArray()
    res.send(result)
}

module.exports = {
    getReview,
    addReview,
    getReviewByEmail
}
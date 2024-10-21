const { getDatabase } = require("../config/db")
const { ObjectId } = require("mongodb")



const getImage = async (req, res) => {
    const db = getDatabase()
    const getImageCollection = db.collection('gallery')
    const imageData = await getImageCollection.find().toArray()
    res.send(imageData)
}

// upload.single('image')

// API to handle form data and image upload
const uploadImage = async (req, res) => {

    const db = getDatabase();
    const getImageCollection = db.collection('gallery');

    const items = req.body;
    console.log(items);
    const result = await getImageCollection.insertOne(items);
    res.send(result)

};

const deleteUser = async (req, res) => {
    const db = getDatabase()
    const getImageCollection = db.collection('gallery')
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await getImageCollection.deleteOne(query);
    res.send(result)
}


module.exports = {
    getImage,
    uploadImage,
    deleteUser
}
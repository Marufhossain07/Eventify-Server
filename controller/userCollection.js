const { getDatabase } = require("../config/db")


const getUser = async (req, res) => {
    const db = getDatabase()
    const userCollections = db.collection('users')
    const userData = await userCollections.find().toArray()

    res.send(userData)
}



const postUser = async (req, res) => {
    const db = getDatabase();
    const userCollections = db.collection("users");
    const userData = req.body;

    const query = { email: userData.email };
    const existingUser = await userCollections.findOne(query);
    if (existingUser) {
        return res.send({ message: 'user already exist' })
    }

    const addUser = await userCollections.insertOne(userData);
    console.log(addUser)
    res.send(addUser);
};

const getAdmin = async(req,res)=>{
    const db = getDatabase()
    const userCollections = db.collection('users')

    const email = req.params.email;
    const query = {email: email};
    const user = await userCollections.findOne(query)

    let admin = false;
    if (user){
        admin = user?.role === 'admin'
    }
    res.send({admin})
}
const getModerator = async(req,res)=>{
    const db = getDatabase()
    const userCollections = db.collection('users')

    const email = req.params.email;
    const query = {email: email};
    const user = await userCollections.findOne(query)

    let moderator = false;
    if (user){
        moderator = user?.role === 'moderator'
    }
    res.send({moderator})
}



module.exports = {
    getUser,
    postUser,
    getAdmin,
    getModerator
};
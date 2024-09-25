
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const uri = 'mongodb+srv://eventifyOwner:rEXOw3NkSnEef3sE@cluster0.qcorp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectToDatabase() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (error) {
        console.error('Error when connecting to Mongodb', error);
        process.exit(1);
    }
}


const getDatabase = () => client.db('Eventify');

module.exports = {
    connectToDatabase,
    getDatabase
}
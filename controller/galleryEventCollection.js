const { getDatabase } = require("../config/db")




const getImage = async(req,res)=>{
    const db = getDatabase()
    const getImageCollection = db.collection('gallery')
    const imageData = await getImageCollection.find().toArray()
    res.send(imageData)
}


module.exports={
    getImage
}
require('dotenv').config()
import mongoose from 'mongoose'

const connection = {}

const { env: { MONGODB_URL } } = process

async function dbConnect() {
    debugger
    if(connection.isConnected){
        return;
    }
    
    console.log(MONGODB_URL)
    const db = await mongoose.connect(MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected)
}

export default dbConnect
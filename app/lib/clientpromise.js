import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI

let client
let clientpromise

if(!uri){
    throw new Error('Add Mongo URI to .env.local');
    
}

if(process.env.NODE_ENV == "development"){
    if(!global._mongoClientPromise){
        client = new MongoClient(uri)
        global._mongoClientPromise = client.connect()
    }
    clientpromise = global._mongoClientPromise
}
else{
    client = new MongoClient(uri)
    clientpromise = client.connect()
}

export default clientpromise
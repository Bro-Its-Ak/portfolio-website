import { NextResponse } from "next/server";
import clientpromise from "../lib/clientpromise";

export async function POST(req) {
    try{let data = await req.json()
   let client = await clientpromise
   let database =  client.db()
   let collection = database.collection("contacts")
   let result = await collection.insertOne({
    name: data.name,
    email:data.email,
    phone:data.phone==""?"Empty":data.phone,
    message:data.message==""?"Empty":data.message,
   })
   return NextResponse.json({result,error:false,success:true})
    }
    catch{
        return NextResponse.json({error:true,success:false})
    }
}
import express from "express";
import  { Response, Request } from "express";
import {client} from "@repo/db/client"

const app=express();

app.post("/signup",async (req:Request,res:Response)=>{
    const {username,password}=req.body;


    const user = await client.user.create({
        data:{
            username,
            password
        }
    });

    res.json({
        message:"Signup successful",
        id:user.id
    })
})

app.listen(5000);
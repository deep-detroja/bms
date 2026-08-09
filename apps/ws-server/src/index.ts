import { WebSocketServer } from "ws";
import {client} from "@repo/db/client"

const wss = new WebSocketServer({port:8080});

wss.on("connection",(socket)=>{
    client.user.create({
        data:{
            username:Math.random().toString,
            password:Math.random().toString()
        }
    })
    socket.send("Hii you are connected to the server")
})
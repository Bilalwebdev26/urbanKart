import app from "./app.js";
import { mongoDB } from "./database/db.config.js";

mongoDB().then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log("Server start : ",process.env.PORT||3000)
    })
}).catch((err)=>{
    consolelog("Error in conection : ",err)
})
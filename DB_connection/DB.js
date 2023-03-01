const mongoose=require('mongoose')
const DB = "mongodb+srv://ShahMuhammad:shahmuhammad@cluster0.0ujaspu.mongodb.net/MernStack?retryWrites=true&w=majority"
mongoose.set("strictQuery", true);
mongoose.connect(DB)
.then(()=>{
    console.log("connection Successful");
}).catch((err)=>{
    console.log("Can not Connect to Database");
})
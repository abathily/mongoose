const express =require("express");
const mongoose =require("mongoose");
const cors =require("cors");
require("dotenv").config()
const routers = require('./routes/userRoute')
//const routers = require('./routes/proRoute')

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Successfully connection in to database"))
.catch((err) => console.log("err connection of database"))


// app server
const app = express()
app.use(express.json())
app.use(cors())


app.get("/",(req, res) =>{res.send("Welcome to our server")} )
console.log('++++++++++++++');


//routes

app.use('/api' , routers)
const port =  5011

app.listen(port , () => {
    console.log(`Server is running on port, ${port}`); 
})
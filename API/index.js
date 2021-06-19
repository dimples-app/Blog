const express = require("express");
const app = express();
const dotenv= require("dotenv");
const mongoose = require('mongoose');
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")


dotenv.config();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true})
    .then(console.log("Connected to MongoDB"))
    .catch( (error) => console.log(error));

    app.use("/api/auth",authRoute)
    app.use("/api/users", userRoute)
    
app.listen("5000", () => {
    console.log("Listening to 5000")
})
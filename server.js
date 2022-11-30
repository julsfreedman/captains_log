require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const reactViews = require("express-react-views");

const mongoose = require("mongoose");


//connect to database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("Connected to Mongo");
});

//view engine
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());


//middleware
app.use((req, res, next) => {
    console.log("I'm running for all routes");
    console.log("1. Middleware");
    next();
});

//use and configure body-parser in your server.js
app.use(express.urlencoded({ extended: false }));


//Routes 
//create a new route
app.get("/new", (req, res) => {
    //res.send("New");
    res.render("New");
});

//create a create route
app.post("/logs", (req, res) => {
    res.send(req.body)
    console.log(req.body);
});



//listen on PORT
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
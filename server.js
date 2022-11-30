require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const reactViews = require("express-react-views");

const mongoose = require("mongoose");
const Log = require('./models/logs');

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

//create Index route
app.get('/logs', (req, res) => {
    //res.send('index')
    Log.find({}, (error, allLogs) => {
        if (!error) {
            res.status(200).render('Index', {
                logs: allLogs
            })
        } else {
            res.status(400), send(error)
        }
    })
});

//create a New route
app.get("/logs/new", (req, res) => {
    //res.send("New");
    res.render("New");
});

//create a Create route
app.post("/logs", (req, res) => {
    //change the input of your checkbox to be true/false rather than on
    if (req.body.shipIsBroken === "on") {
        //shipIsBroken: Boolean (bonus: set a default to true) The default value of Boolean is false:
        req.body.shipIsBroken = false
    } else {
        req.body.shipIsBroken = true
    }
    Log.create(req.body, (error, createdLog) => {
        if (!error) {
            console.log(createdLog);
            res.status(200).redirect("/logs");
        } else {
            res.status(400).send(error);
        }
        //res.send(req.body)
        console.log(req.body);
    })
});

//Create Show route
app.get('/:id', (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        if (!error) {
            res.status(200).render('Show', { log: foundLog })
        } else {
            res.status(400).send(error)
        }
    })
})


//listen on PORT
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
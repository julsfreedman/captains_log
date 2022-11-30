require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const reactViews = require("express-react-views");

const mongoose = require("mongoose");
const Log = require('./models/logs');

const methodOverRide = require('method-override')

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

//====ROUTES====INDUCES====

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

//create Delete route
app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/logs')
    })
})

//create Update route
app.put('/logs/:id', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = false
    } else {
        req.body.shipIsBroken = true
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
        if (!err) {
            res.status(200).redirect(`/logs/${req.params.id}`)
        } else {
            res.status(400).send(err)
        }
    })
})

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

//create Edit route
app.get("/logs/:id/edit", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        if (!error) {
            res.status(200).render('Edit', { log: foundLog })
        } else {
            res.status(400).send({ msg: error.message })
        }
    })
});

//Create Show route
app.get('/logs/:id', (req, res) => {
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
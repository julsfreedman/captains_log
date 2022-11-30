const express = require('express')
const router = express.Router()
const Log = require('../models/logs')

router.get('/', (req, res) => {
    Log.find({}, (error, allLogs) => {
        if (!error) {
            res.status(200).render('Index', {
                logs: allLogs
            })
        } else {
            res.status(400), send(error)
        }
    })
})


router.get('/new', (req, res) => {
    res.render('New')
})


router.delete('/logs/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/logs')
    })
})

router.put('/:id', (req, res) => {
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

router.post('/', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = false
    } else {
        req.body.shipIsBroken = true
    }
    Log.create(req.body, (error, createdlog) => {
        if (!error) {
            res.status(200).redirect('/logs')
        } else {
            res.status(400).send(error)
        }
    })
})


router.get("/:id/edit", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        if (!error) {
            res.status(200).render('Edit', { log: foundLog })
        } else {
            res.status(400).send({ msg: error.message })
        }
    })
})


router.get('/:id', (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        if (!error) {
            res.status(200).render('Show', { log: foundLog })
        } else {
            res.status(400).send(error)
        }
    })
})



module.exports = router
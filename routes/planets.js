let express = require('express')
let Planets = require('../models').Planets
let db = require('../models')
let Planet = db.Planet
let router = express.Router()

// router to get all of the planets in the database in alphabetical order
router.get('/planets', function(req,res,next){
    Planets.findAll({order: ['name']})
        .then( planets => {
            return res.json(planets)
        })
        .catch( err => next.err())
})

router.post('/planets', function(req, res, next){
    Planet.create(req.body).then( (data)=> {
        return res.status(201).send('ok')
    })
})

module.exports = router
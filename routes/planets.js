let express = require('express')
let Planets = require('../models').Planets
let db = require('../models')
let Planet = db.Planets
let router = express.Router()

// router to get all of the planets in the database in order alphabetically by resource1
//     .get is used for fetching data
router.get('/planets', function(req,res,next){
    Planets.findAll({order: ['resource1']})
        .then( planets => {
            // return json data
            return res.json(planets)
        })
        .catch( err => next.err())
})

// used to create planet object, req.body contains any data that the vue client has sent in th e request
router.post('/planets', function(req, res, next){
    Planet.create(req.body).then( (data)=> {
        return res.status(201).send('ok')
    })
})

router.patch('/planets/:id', function(req, res, next){
    Planet.update( req.body, { where: {id: req.params.id } })
        .then( rowsModified => {
            return res.send('ok')
    })
})

router.delete('/planets/:id', function(req, res, next){
    Planet.destroy({where: { id: req.params.id}})
        .then( rowsModified => {
            return res.send('ok')
        }).catch( err => next(err))
})




module.exports = router
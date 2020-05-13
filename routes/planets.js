let express = require('express')
let Planets = require('../models').Planets
let db = require('../models')
let Planet = db.Planets
let router = express.Router()

// router to get all of the planets in the database in order alphabetically by resource1
//     .get is used for fetching data
router.get('/planets', function(req,res,next){

    console.log(req.query)

    if (req.query.element) {
        Planets.findAll({where: {resource1: req.query.element}}, {order: ['resource1']})
            .then(planets => {
                // return json data
                return res.json(planets)
            })
            .catch(err => next.err())
    } else if(req.query.element) {
        Planets.findAll({where: {resource2: req.query.element}}, {order: ['resource1']})
            .then(planets => {
                // return json data
                return res.json(planets)
            })
            .catch(err => next.err())
    } else {
        Planets.findAll({order: ['resource1']})
            .then( planets => {
                return res.json(planets)
            }).catch(err => next.err())
    }
})

// used to create planet object, req.body contains any data that the vue client has sent in th e request
router.post('/planets', function(req, res, next){
    Planet.create(req.body).then( (data)=> {
        return res.status(201).send('ok')
    })
})

// This code doesn't seem to be doing anything
// router.patch('/planets/:id', function(req, res, next){
//     Planet.update( req.body, { where: {id: req.params.id } })
//         .then( rowsModified => {
//             return res.send('ok')
//     })
// })

router.delete('/planets/:name', function(req, res, next){
    Planet.destroy({where: { id: req.params.name}})
        .then( rowsModified => {
            return res.send('ok')
        }).catch( err => next(err))
})




module.exports = router
let express = require('express')
let Planets = require('../models').Planets
let db = require('../models')
let Planet = db.Planets
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

router.patch('/planets/:id', function(req, res, next){
    Planet.update( req.body, { where: {id: req.params.id } })
        .then( rowsModified => {
            if (!rowsModified[0]) {
                return res.status(404).send('Not Found')
            } else {
                return res.send('ok')
            }
        }).catch( err => {
            if (err instanceof Sequelize.ValidationError) {
                let messages = err.errors.map( (e) => e.message)
                return res.status(400).json(messages)
            }
    })
})

router.delete('/planets/:id', function(req, res, next){
    Planet.destroy({where: { id: req.params.id}})
        .then( rowsModified => {
            return res.send('ok')
        }).catch( err => next(err))
})




module.exports = router
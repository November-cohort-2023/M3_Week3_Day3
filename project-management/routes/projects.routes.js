const Project = require('../models/Project.model')
const router = require('express').Router()

const { isAuthenticated } = require("../middleware/jwt.middleware")




router.get('/projects',(req,res)=>{
    
    Project.find()
    .then((allProjects)=>{
        res.json(allProjects)
    })
    .catch(err=>res.json(err))
})


router.post('/projects',(req,res)=>{

    Project.create(req.body)
    .then((createdProject)=>{
        res.json(createdProject)
    })
    .catch(err=>res.json(err))

})





module.exports = router
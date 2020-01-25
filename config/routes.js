const express = require('express')
const router = express.Router()
const controller = require('../controllers/base.controller')

router.get('/', controller.base)

// GET route => get JSON array of columns
router.get('/columns', (req, res, next) => {
  
})

// POST route => create column
/*router.post('/columns', (req, res, next)=>{
 
  Project.create({
    position: req.body.position,
    title: req.body.title,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
    cards: [], 
    id: req.body.updatedAt,
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
})*/

module.exports = router;

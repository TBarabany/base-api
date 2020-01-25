const express = require('express')
const router = express.Router()
const controller = require('../controllers/base.controller')
const columnsController = require('../controllers/columns.controller')
const cardsController = require('../controllers/cards.controller')

router.get('/', controller.base)

// COLUMNS
router.get('/columns',columnsController.list) // GET route => Get JSON array of columns
router.post('/columns', columnsController.create)// POST route => create column
router.get('/columns/:id', columnsController.get)// GET route => get JSON column detail
router.patch('/columns/:id', columnsController.update)// PATCH route => update column
router.delete('/columns/:id', columnsController.delete)// DELETE route => delete column

// CARDS
router.get('/cards',cardsController.list) // GET route => Get JSON array of cards
router.post('/cards',cardsController.create) // POST route => create cards
router.get('/cards/:id', cardsController.get)// GET route => get JSON card detail
router.patch('/cards/:id', cardsController.update)// PATCH route => update card 
router.delete('/cards/:id', cardsController.delete)// DELETE route => delete card


module.exports = router;

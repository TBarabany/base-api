const createError = require('http-errors');
const mongoose = require('mongoose');
const Card = require('../models/card.model')

module.exports.list = (req, res, next) => {
  Card.find().populate('column')
  .then(allCards => {
    res.json(allCards);
  })
  .catch(next)
}

module.exports.create = (req, res, next) => {
  const card = new Card({
    position: req.body.position,
    description: req.body.description,
    labels: req.body.labels,
    title: req.body.title, 
    column: req.body.column
  })
  card.save()
    .then((newCard) => {
      res.status(201).json(newCard)
    })
    .catch(next)
}

module.exports.get = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw createError(400, 'Invalid ID');
  }
  Card.findById(req.params.id)
    .populate('column')
    .then(card => 
      res.json(card)
      )
      .catch(next)
}

module.exports.update = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw createError(400, 'Invalid ID');
  }
  
  Card.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('columns')
      .then(card => {
          if(!card) {
              throw createError(404, 'Card Not found');
          } else {
              res.json(card)
          }
      })
      .catch(next)        
}

module.exports.delete  = (req,res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw createError(400, 'Invalid ID');
  }

  Card.findByIdAndRemove(req.params.id)
      .then(card => {
          if(!card) {
              throw createError(404, 'Card Not found');
          }
      })
      .catch(next)  
}


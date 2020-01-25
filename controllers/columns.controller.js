const createError = require('http-errors');
const mongoose = require('mongoose');
const Column = require('../models/column.model')


module.exports.list = (req, res, next) => {
    Column.find().populate('cards')
    .then(allColumns => {
      res.json(allColumns);
    })
    .catch(next)
}

module.exports.create = (req, res, next) => {
    const column = new Column({
        position: req.body.position,
        title: req.body.title
    })
    column.save()
        .then((newColumn) => {
            res.status(201).json(newColumn)
        })
        .catch(next)
}

module.exports.get = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        throw createError(400, 'Invalid ID');
      }
    Column.findById(req.params.id).populate('cards')
        .then(column => {
        res.json(column)
        })
        .catch(next)
}


module.exports.update = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        throw createError(400, 'Invalid ID');
    }
    
    Column.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('cards')
        .then(column => {
            if(!column) {
                throw createError(404, 'Column Not found');
            } else {
                res.json(column)
            }
        })
        .catch(next)        
}

module.exports.delete  = (req,res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        throw createError(400, 'Invalid ID');
    }

    Column.findByIdAndRemove(req.params.id)
        .then(column => {
            if(!column) {
                throw createError(404, 'Column Not found');
            }
        })
        .catch(next)  
}
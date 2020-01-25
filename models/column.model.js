const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const Card = require('./card.model')

const columnSchema = new Schema(
  {
    position: { type:Number, required: true },
    title:{ type:String, required: true }
  }, 
  {
    timestamps:true,
    toJSON: {
      virtuals:true,
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v; 
        return ret 
      }
    }
  }
) 

columnSchema.virtual('cards', {
  ref: Card.modelName, 
  localField: '_id',
  foreignField: 'column', 
  options: {sort: {position: -1}}
})

const Column = new mongoose.model('Column', columnSchema)

module.exports = Column
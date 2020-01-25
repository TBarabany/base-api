const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const LABELS = ['Learning Unit', 'Kata', 'Example', 'Lab', 'Done!', 'Review', 'Bonus'];

const cardSchema = new Schema(
  {
    position: { type:Number, required: true },
    description: { type:String, required:true },
    labels: [{ type:String, enum:LABELS }],
    title: { type:String, required: true }, 
    column: { type:mongoose.Schema.Types.ObjectId, ref: 'Column', required: true}
  }, 
  {
    timestamps:true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v; 
        return ret 
      }
    }
  }
) 

const Card = new mongoose.model('Card', cardSchema)

module.exports = Card

import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

export default mongoose.model('Item', itemSchema);

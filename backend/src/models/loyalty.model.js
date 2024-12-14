import mongoose from 'mongoose';

// Define the schema for loyalty points
const loyaltySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the user's ID
    required: true,
    ref: 'User', // Assuming you have a User model
  },
  points: {
    type: Number,
    required: true,
    default: 0,
  },
  rewards: {
    type: [String], // Array of reward descriptions
    default: [],
  },
});

// Create and export the model
const Loyalty = mongoose.model('Loyalty', loyaltySchema);
export default Loyalty;

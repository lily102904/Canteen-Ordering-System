import express from 'express';
import Loyalty from '../models/loyalty.model.js';

const loyaltyRouter = express.Router();

loyaltyRouter.get('/', async (req, res) => {
  try {
    // Replace `req.user.id` with how you identify the logged-in user
    const userId = req.user?.id || 'defaultUserId'; // Example fallback

    const loyaltyData = await Loyalty.findOne({ userId });

    if (!loyaltyData) {
      return res.status(404).json({ message: 'Loyalty data not found' });
    }

    res.json(loyaltyData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching loyalty data', error });
  }
});

export default loyaltyRouter;

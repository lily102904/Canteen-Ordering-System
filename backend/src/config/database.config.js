import mongoose from 'mongoose';
import { UserModel } from '../models/user.model.js';
import { FoodModel } from '../models/food.model.js';
import { sample_users, sample_foods } from '../db.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

// Load environment variables before connecting to db
dotenv.config();

const { connect, set } = mongoose;
const PASSWORD_HASH_SALT_ROUNDS = 10;
set('strictQuery', true);

export const dbconnect = async () => {
  try {
    console.log('Connecting to MongoDB...');
    console.log('MONGO_URI:', process.env.MONGO_URI);

    await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB!');

    await seedUsers();
    await seedFoods();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

async function seedUsers() {
  try {
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {
      console.log('Users seed is already done!');
      return;
    }

    for (let user of sample_users) {
      user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
      await UserModel.create(user);
    }

    console.log('Users seed is done!');
  } catch (error) {
    console.error('Error seeding users:', error.message);
  }
}

async function seedFoods() {
  try {
    const foodsCount = await FoodModel.countDocuments();
    if (foodsCount > 0) {
      console.log('Foods seed is already done!');
      return;
    }

    for (const food of sample_foods) {
      food.imageUrl = `/foods/${food.imageUrl}`; // Correct image URL path
      await FoodModel.create(food); // Save food item to database
    }

    console.log('Foods seed is done!');
  } catch (error) {
    console.error('Error seeding foods:', error.message);
  }
}

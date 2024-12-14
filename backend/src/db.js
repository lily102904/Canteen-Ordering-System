import { MongoClient } from 'mongodb';

// MongoDB Atlas connection string
const uri = 'mongodb+srv://lillian:01080810@cluster0.dykia.mongodb.net/myDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri);

export const sample_foods = [
  { name: 'Egg Roll', cookTime: '10-20', price: 50, favorite: false, origins: ['China'], stars: 4.5, imageUrl: 'food-1.jpg', tags: ['Snack'] },
  { name: 'Fufu And Goat Soup', price: 80, cookTime: '40-50', favorite: true, origins: ['Ghana'], stars: 5, imageUrl: 'food-2.jpg', tags: ['Lunch'] },
  { name: 'Banku And Okro Stew', price: 80, cookTime: '40-50', favorite: true, origins: ['Ghana'], stars: 5, imageUrl: 'food-3.jpg', tags: ['Lunch'] },
  { name: 'Tuazaafi', price: 90, cookTime: '45-50', favorite:true, origins: ['Ghana'], stars: 5, imageUrl: 'food-4.jpg', tags: ['Lunch'] },
  { name: 'Jollof And Chicken', price: 100, cookTime: '40-50', favorite: false, origins: ['Africa'], stars: 3, imageUrl: 'food-5.jpg', tags: ['Fastfood',] },
  { name: 'Ampesi', price: 100, cookTime: '40-50', favorite: false, origins: ['Ghana'], stars: 3.5, imageUrl: 'food-6.jpg', tags: ['Lunch'] },
  { name: 'Koko', price: 20, cookTime: '30-40', favorite: false, origins: ['Ghana'], stars: 4.0, imageUrl: 'food-7.jpg', tags: ['Breakfast'] },
  { name: 'Pasta', price: 200, cookTime: '50-60', favorite: true, origins: ['Italy'], stars: 4.2, imageUrl: 'food-8.jpg', tags: ['Lunch'] },
  { name: 'Wrap', price: 70, cookTime: '30-40', favorite: true, origins: ['Mexico'], stars: 4.2, imageUrl: 'food-9.jpg', tags: ['Fastfood'] },
];
export const sample_users = [
  { name: 'Lillian', email: 'lillian3adunia@gmail.com', password: '12345', address: 'Botwe Accra', isAdmin: true },
  { name: 'Kwesi', email: 'kwesi@gmail.com', password: '101004', address: 'Adenta', isAdmin: false},
];

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");

    const database = client.db('lillian'); 
    const foodsCollection = database.collection('foods');
    const usersCollection = database.collection('users');
    
    // Insert data into collections
    await foodsCollection.insertMany(sample_foods);
    console.log('Sample foods added to MongoDB!');
    
    await usersCollection.insertMany(sample_users);
    console.log('Sample users added to MongoDB!');

    // Optionally, verify by fetching data
    const foods = await foodsCollection.find().toArray();
    console.log("Foods in the database:", foods);
    const users = await usersCollection.find().toArray();
    console.log("Users in the database:", users);
  } catch (err) {
    console.error("Error occurred:", err);
  } finally {
    await client.close();
  }
}

run().catch(console.error);

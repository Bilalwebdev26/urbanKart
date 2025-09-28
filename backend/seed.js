import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "./models/product.model.js";
import { products } from "./products.js";

dotenv.config();



// MongoDB connect


const seedInsert = async () => {

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/urbanKart`)
    // Purane users delete (optional)
    await Product.deleteMany();

    // JSON file read karo


    // DB me insert karo
    await Product.insertMany(products);

    console.log("✅ Users Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding users:", error);
    process.exit(1);
  }
};

seedInsert();

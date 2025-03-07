
// db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const URL = process.env.MONGODB_URI;

// const itemSchema = new mongoose.Schema({
//     itemName: String,
//     description: String,
//     // Add other fields as needed
// });


const connectDB = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

const insertItemData = async (itemData) => {
    // try {
    //     // Assuming you have an "Item" model defined
    //     const Item = mongoose.model("Item", itemSchema);

    //     // Creating a new item instance with the provided data
    //     const newItem = new Item(itemData);

    //     // Saving the item to the "items" collection in the database
    //     await newItem.save();
    //     console.log("Item inserted successfully");
    // } catch (error) {
    //     console.error("Error inserting item data:", error);
    // }
};

export { connectDB, insertItemData };

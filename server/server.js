import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();

import userRoutes from "./router/auth-router.js";
import { connectDB, insertItemData } from "./db/db.js";
app.use(express.json());
app.use(cors());


// Your route handlers



app.use("/api/user", userRoutes);

// Body parsing middleware

const PORT = process.env.PORT || 5050;

// app.get("/",(req, res) => {
   
//     res.status(200).send("homes");
// });

// start the Express server
connectDB().then(() => {
//   const itemData = {
//     itemName: "Example Item",
//     description: "This is a sample item description",
// };

// // Insert data into the "items" collection
// insertItemData(itemData);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
});

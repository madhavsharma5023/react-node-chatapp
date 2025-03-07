import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    sender: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    content: { type: String, trim: true },
    chat: [{ type: Schema.Types.ObjectId, ref: 'user' }]
},
{
    timestamps:true,
});


const message = mongoose.model("message", userSchema);

export { message };

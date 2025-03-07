import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    chatname: { type: String, required: true },
    groupchat: { type: String, required: true },
    users: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    latest_message: [{ type: Schema.Types.ObjectId, ref: 'message' }],
    group_Admin: [{ type: Schema.Types.ObjectId, ref: 'user' }]
},
{
    timestamps:true,
});


const chat = mongoose.model("chat", userSchema);

export { chat };

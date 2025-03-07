import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
    const user=this;
    console.log(user)

    if (!this.isModified) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });
// userSchema.methods.generateTokens=async function () {
//     return jwt.sign({
//         userid:this._id.toString(),
//         email:this.email,
//     },
//     process.env.JWTTOKEN,
//     {
//         expiresIn:"1d",
//     }
//     )
    
//   };
const user = mongoose.model("user", userSchema);

export { user };

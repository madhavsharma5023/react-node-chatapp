
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

import { user } from "../models/model.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const userExist = await user.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // If the user doesn't exist, create a new user
    await user.create({ name, email, password });

    // // Send email to the registered user
    // await sendRegistrationEmail(email);
    // Respond with success message or any other necessary information
    res.status(200).json({ msg: "1" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

// Function to send a registration email
// const sendRegistrationEmail = async (userEmail) => {
//   try {
//     // Create a nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "madhavsharma5023@gmail.com", 
//         pass: "your-password", 
//       },
//     });

//     // Define email options
//     const mailOptions = {
//       from: "madhavsharma5023@gmail.com", // replace with your Gmail email address
//       to: userEmail,
//       subject: "Registration Successful",
//       text: "Thank you for registering on our platform!",
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     console.log("Registration email sent");
//   } catch (error) {
//     console.error("Error sending registration email:", error);
//   }
// };

const login = async (req, res) => {

  try {
    const { email, password } = req.body;

    // Find the user by email
    const existingUser = await user.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }
    res.json({ msg: "Login successful" });

    // Generate a JWT token for authentication
    // const token = jwt.sign({ id: existingUser._id }, "your_secret_key", {
    //   expiresIn: '1h', // Token expiry time
    // });

    // res.json({ token, user: { id: existingUser._id, email: existingUser.email } }); // Return token and user info

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
}
export { register ,login};

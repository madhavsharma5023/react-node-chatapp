import express from "express";
const router = express.Router();
import { register ,login} from "../controller/auth-controller.js";

// router.route("/").get(register);

// router.post("/",(req, res) => {
//    console.log(req.body)
//     res.status(200).send("router");
// });
router.post("/register", register);

router.post('/login', login); 

export default router;

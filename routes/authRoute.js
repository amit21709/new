import express from "express";
import {
  loginCtrl,
  registerCtrl,
  forgotPasswordCtrl,
} from "./../controller/authCtrl.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerCtrl);

//LOGIN || POST
router.post("/login", loginCtrl);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordCtrl);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;

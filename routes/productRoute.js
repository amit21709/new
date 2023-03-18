import express from "express";
import {
  createProductCtrl,
  deleteProductCtrl,
  getProductCtrl,
  getSingleProductCtrl,
  productPhotoCtrl,
  updateProductCtrl,
} from "../controller/productCtrl.js";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//route

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductCtrl
);
//Get All Product
router.get("/get-product", getProductCtrl);

//single product
router.get("/get-product/:slug", getSingleProductCtrl);

//get photo
router.get("/product-photo/:pid", productPhotoCtrl);

//delete product
router.delete("/product/:pid", deleteProductCtrl);

//Update product

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductCtrl
);

export default router;

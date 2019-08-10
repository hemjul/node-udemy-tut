const express = require("express");
const router = express.Router();
const adminProductsController = require("../controllers/admin");

router.get("/add-product", adminProductsController.getAddProduct);

router.post("/add-product", adminProductsController.postAddProduct);

router.get("/products", adminProductsController.getProducts);

router.get("/admin-products", adminProductsController.getAdminProducts);

router.get(
  "/edit-product/:productId",
  adminProductsController.getAdminEditProduct
);

router.post("/edit-product");

module.exports = router;

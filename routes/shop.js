const express = require("express");
const router = express.Router();
const shopProductsController = require("../controllers/shop");

router.get("/", shopProductsController.getIndex);

router.get("/products", shopProductsController.getProducts);

router.get("/product/:productId", shopProductsController.getProduct);

router.get("/cart", shopProductsController.getCart);

router.post("/cart", shopProductsController.postProductToCart);

router.get("/checkout", shopProductsController.getCheckout);

router.get("/orders", shopProductsController.getOrders);

module.exports = router;

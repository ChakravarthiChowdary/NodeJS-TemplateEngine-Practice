const express = require("express");

const router = express.Router();

const products = [];

router.get("/", (req, res, next) => {
  res.render("shop.ejs", { pageTitle: "Shop", products: products });
});

router.get("/addProduct", (req, res, next) => {
  res.render("addProduct.ejs", { pageTitle: "Add Product" });
});

router.post("/addProduct", (req, res, next) => {
  products.push({ title: req.body.title, description: req.body.description });
  res.redirect("/");
});

module.exports = router;

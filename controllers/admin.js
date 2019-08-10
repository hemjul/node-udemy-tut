const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  console.log(title, imageUrl, price, description);
  var product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect("/");
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editMode: false
  });
};

exports.getProducts = (req, res, next) => {
  res.render("admin/products", { pageTitle: "Products", path: "/products" });
};

exports.getAdminProducts = (req, res, next) => {
  products = Product.fetchAll(products => {
    res.render("admin/products", {
      products: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
      hasProducts: products.length > 0,
      productCSS: true,
      shopActive: true
    });
  });
};

exports.getAdminEditProduct = (req, res, next) => {
  const editMode = req.query.editmode;
  console.log("We are in edit mode :" + editMode);
  const productId = req.params.productId;
  console.log("We are editing product:" + productId);
  if (!editMode || !productId) {
    res.redirect("/");
  }
  Product.fetchByProductId(productId, product => {
    console.log(product);
    res.render("admin/edit-product", {
      pageTitle: "Edit product",
      path: "/admin/edit-product",
      editMode: editMode,
      product: product
    });
  });
};

exports.updateProduct = (req, res, next) => {};

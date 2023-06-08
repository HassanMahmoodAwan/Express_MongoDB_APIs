var express = require('express');
var router = express.Router();
var Product = require('../models/product')

router.get("/", async function (req, res, next) {
  let product = await Product.find();
  // console.log("hello");
  // console.log(product);
  res.render("products/product", { title: "Products", product });
});

 router.get("/add", async function (req, res, next) {
   res.render("products/product-add", { title: 'add Product'});
 });

  router.post("/add", async function (req, res, next) {
    let product = new Product(req.body);
    await product.save();
    res.redirect("/products");
    console.log(req.body);
    res.render("products/product-add", { title: "add Product" });
  });
  
  router.get("/delete/:id", async function (req, res, next) {
    let product = await Product.findByIdAndDelete(req.params.id);
    //res.send('hello form ID'+req.params.id);
    res.redirect("/products");
  });
  
  router.get("/edit/:id", async function (req, res, next) {
    let product = await Product.findById(req.params.id);
    //res.send('hello form ID'+req.params.id);
    // res.redirect("/products");
    res.render('products/product-edit', {title: 'Edit Product', product} )
  });
  router.post("/edit/:id", async function (req, res, next) {
    let product = await Product.findById(req.params.id);
    product.productName = req.body.productName;
    product.Quantity = req.body.Quantity;
    product.Price = req.body.Price;
    await product.save();
    res.redirect("/products");
    //res.send('hello form ID'+req.params.id);
    // res.redirect("/products");
    //res.render('products/product-edit', {title: 'Edit Product', product} )
  });


  // Cookies and Carts
    router.get("/cart/:id", async function (req, res, next) {
      let product = await Product.findById(req.params.id);
      console.log('Adding product to cart');
      let cart = [];
      if(req.cookies.cart) { cart = req.cookies.cart;}
      cart.push(product);
      res.cookie('cart', cart);

     // res.render("products/product-edit", { title: "cart Product", product });
      res.redirect("/products");
    });
    
    router.get("/cart/remove/:id", async function (req, res, next) {
      let cart = [];
      if(req.cookies.cart) { cart = req.cookies.cart;}
      cart.splice(cart.findIndex(c=>{return c._id == req.params.id; }), 1);
      res.cookie('cart', cart);

     // res.render("products/product-edit", { title: "cart Product", product });
      res.redirect("/cart");
    });



module.exports = router;

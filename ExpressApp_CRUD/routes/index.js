var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HomePage' });
});

router.get("/contactUs", function (req, res, next) {
  res.render("contact/contactUs", { title: "contactUs" });
});
router.get("/service", function (req, res, next) {
  res.render("service", { title: "Services" });
});

router.get("/cart", function (req, res, next) {
    //res.send("Hello");
    let cart = req.cookies.cart;
    if(!cart){cart = [];}
    res.render('cart', {title: "cart", cart})
  // res.render("service", { title: "Services" });
});



module.exports = router;

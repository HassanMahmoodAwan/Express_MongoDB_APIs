var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'HomePage', message:"Welcome to My App"});
});


router.get('/products', function(req, res, next) {
  res.render('products', {title: 'ProductsPage', productName: 'Software Products', page: 'Modern Products'});

});

module.exports = router;

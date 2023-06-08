var express = require("express");
var router = express.Router();
var User = require("../models/user");

// Route for Registeration
router.get("/register" , function (req, res, next) {
    res.render('users/register', {title: "register"});
});

router.post("/register" , async function (req, res, next) {
    let user = new User(req.body);
    await user.save();
    res.redirect("/products");
});


module.exports = router;

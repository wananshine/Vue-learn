var express = require('express');
var exports = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  
// });

// exports.index = function(req,res){
	// res.render("index",{title:"dsafafagfag"});
// }

// exports.index = function(req, res){
  // res.render('index', { title: 'werwrwerewrf' });
// };

// define(function(require, exports, module){

  // function ss(container, options) {

    // "use strict";

    // res.render('index', { title: 'werwrwerewrf' });

  // module.exports=ss;
// })


exports.userlist = function(db) {
    return function(req, res) {
        var collection = db.get('usercollection');
        collection.find({},{},function(e,docs){
            res.render('userlist', {
                "userlist" : docs
            });
        });
    };
};


exports.newuser = function(req, res){
  res.render('newuser', { title: 'Add New User' });
};


exports.adduser = function(db) {
    return function(req, res) {

        // Get our form values. These rely on the "name" attributes
        var userName = req.body.username;
        var userEmail = req.body.useremail;

        // Set our collection
        var collection = db.get('usercollection');

        // Submit to the DB
        collection.insert({
            "username" : userName,
            "email" : userEmail
        }, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // If it worked, set the header so the address bar doesn't still say /adduser
                res.location("userlist");
                // And forward to success page
                res.redirect("userlist");
            }
        });

    }
}




module.exports = exports;

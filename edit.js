var express = require('express');
var router = express.Router();
var models = require('../models/');

models.Page.findOneAndRemove({
	"url_name": req.params.url_name
}, function(err, pages) {
	// console.log(pages); 
	res.redirect('/')
})


router.post('/wiki/:url_name/update', function(req, res) {
req.body.title

req.body.text
models.Page.findOneAndUpdate({
	"url_name": req.params.url_name
}, function(err, pages) {
	// console.log(pages); 
	res.render('show', {
		pages: pages

	})
})
})
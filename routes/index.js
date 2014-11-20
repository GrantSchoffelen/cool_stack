var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET home page. */
router.get('/', function(req, res) {
	models.Page.find(function(err, pages) {
	  res.render('index', { title: 'BROWSE MY WIKISTACK', docs: pages } );
	})
});

router.get('/about_us', function(req, res) {
  res.render('about_us', { title: 'BROWSE MY WIKISTACK' });
});

router.get('/add', function(req, res) {
  res.render('add', { title: 'ADD A PAGE' });
});

router.get('/wiki/:url_name', function(req, res) {
	models.Page.find({"url_name": req.params.url_name}, function(err, pages){
		// console.log(pages); 
		res.render('show', { pages: pages,
			url_name: req.params.url_name})
})
   
});

router.post('/wiki/:url_name/update', function(req, res) {
	var thisroute = req.params.url_name
	models.Page.findOneAndUpdate({
		"url_name": req.params.url_name
	}, {body: req.body.body}, function(err, pages) {
		console.log(pages); 
		res.redirect('/wiki/' + thisroute)
	})
})

router.post('/wiki/:url_name/delete', function(req, res) {
	console.log("got here")
	var thisroute = req.params.url_name
	models.Page.findOneAndRemove({
		"url_name": req.params.url_name
	}, function(err, pages) {
		console.log(pages); 
		res.redirect('/')
	})
})
module.exports = router;

// router.get('/url:name', function(req, res){
// 	Page.findOne(function(err, pages))
// })

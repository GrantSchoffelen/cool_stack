var express = require('express');
var router = express.Router();
var models = require('../models/');


/* GET users listing. */
router.get('/', function(req, res) {
  res.render('add');
});

// router.get('/', function(req, res) {
//   res.send('respond with a resource');
// });

router.post('/submit', function(req, res) {
	console.log(req.body)

	var title = req.body.page_title;
	var body = req.body.page_content;
	var url_name = function(){
		 if (typeof title !== "undefined" && title !== "") {
		return title.replace(/\W+/g, "_");
		 }
		else {
			 return Math.random().toString(36).substring(2,7);
		 }
	}();


 // 
  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `body` and `url_name` variables here

  var p = new models.Page({ "title": title, "body":body, "url_name": url_name});
  p.save();
  res.redirect('/');
});


module.exports = router;

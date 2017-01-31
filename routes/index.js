var express = require('express');
var router = express.Router();

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

/* GET home page. */
router.get('/multerproj', function(req, res, next) {
  res.render('home');
});

router.post('/multerproj', upload.any(), function (req, res, next) {
	console.log(req.files);
	console.log(req.body);
	res.send(req.files);

  
});



module.exports = router;

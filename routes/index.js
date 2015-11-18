var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'public/uploads/', limits: { fileSize: 5000000 } });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Moustaches' });
});

router.post('/', upload.single('image'), function(req, res, next) {
  res.render('draw', { title: 'Moustaches', name: req.file.filename });
});

module.exports = router;

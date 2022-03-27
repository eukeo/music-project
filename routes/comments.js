var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments.js');

// router.get('/:id/comments', commentsCtrl.show);
router.post('/:id/comments', commentsCtrl.create);

module.exports = router;
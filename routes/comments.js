var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments.js');

router.get('/:id/comments', commentsCtrl.show);
router.get('/:id/comments', commentsCtrl.create);
router.put('/:id/comments', commentsCtrl.update);


module.exports = router;
var express = require('express');
var router = express.Router();
const tracksCtrl = require('../controllers/tracks.js');

router.get('/', tracksCtrl.index);
router.get('/new', tracksCtrl.new);
router.post('/link', tracksCtrl.create);
// router.get('/:id/comments', tracksCtrl.show);

module.exports = router;
var express = require('express');
var router = express.Router();
const tracksCtrl = require('../controllers/tracks.js');

router.get('/', tracksCtrl.index);
router.get('/new', tracksCtrl.new);
router.post('/', tracksCtrl.create);
router.get('/:id/comments', tracksCtrl.show);
router.post('/:id/comments', tracksCtrl.create);

module.exports = router;
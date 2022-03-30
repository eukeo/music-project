var express = require('express');
var router = express.Router();
const tracksCtrl = require('../controllers/tracks.js');

router.get('/', tracksCtrl.index);
router.get('/', tracksCtrl.new);
router.post('/', tracksCtrl.create);
router.get('/', tracksCtrl.show);
// router.post('/:id/comments', tracksCtrl.create);

module.exports = router;
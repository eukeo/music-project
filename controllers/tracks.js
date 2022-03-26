const { render } = require('ejs');
const Track = require('../models/track.js');


module.exports = {
    index,
    new: newTrack,
    create,
    show
};

function index(req, res){
    Track.find({}, function(err, tracks) {
        res.render('tracks/index', { tracks })
    })
};

function newTrack(req, res){
    res.render('tracks')
}

function create(req, res) {
  const track = new Track(req.body);
  track.save(function(err) {
    if (err) return res.render('tracks');
    console.log(track);
    res.redirect('tracks');
  });
}

function show(req, res) {
  Track.findById(req.params.id, function(err, tracks){
    res.render('tracks/comments', {
      title: 'Comments',
      track: Track
    })
  })
}

const Track = require('../models/track.js');


module.exports = {
    index,
    new: newTrack,
    create,
};

function index(req, res){
    Track.find({}, function(err, tracks) {
        res.render('tracks', {tracks})
    })
};

function newTrack(req, res){
    res.render('tracks/new')
}

function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    console.log(req.body)
    const track = new Track(req.body);
    console.log(track)
    track.save(function(err) {
      if (err) return res.render('tracks/new');
      console.log(track);
      res.redirect('tracks');
    });
  }
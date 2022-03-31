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
        res.render('tracks', { tracks })
  })
};

function newTrack(req, res){
    res.render('tracks')
};

function create(req, res) {
  Track.find({}, function(err, tracks) {
  const track = new Track(req.body)
  track.save((err, track) => {
      if(err){
        return res.redirect('tracks')
      }
      console.log(track)
      res.render('tracks', {track, tracks})
    })
  })
};

function show(req, res) {
  Track.findById(req.params.id, (err, track) =>{
  console.log(track.createdAt)
      res.render('tracks/:id/comments', { track })
  })
};
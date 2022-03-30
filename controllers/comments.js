const Comment = require('../models/track.js');

module.exports = {
    show,
    create,
    update,
    delete: deleteComment
};

function show(req, res) {
    track.findById(req.params.id, (err, track) =>{
    console.log(track.createdAt)
        res.render(':id/comments', { track })
    })
  };

function create(req, res) {
    const track = new Comment(req.body)
    track.save((err) => {
        if(err){
      return res.render('comments')
    }
      res.redirect(':id/comments')
    })
};

function update(req, res) {

}



module.exports = mongoose.model('Comments', viewCommentsSchema);
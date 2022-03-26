const mongoose = require('mongoose');
const Schema = mongoose.Schema
require('mongoose-type-url');

const trackSchema = new Schema({
    addTrack:{
        type: mongoose.SchemaTypes.Url, 
        required: true
    },
    status:{
        type: String,
        required: true
    }
});

var options = { 
    auto_play: false,
    buying: true,
    liking: true,
    download: true,
    sharing: true,
    show_artwork: true,
    show_comments: true,
    show_playcount: true,
    show_user: true,
    start_track: 0 
};

module.exports = mongoose.model('TrackPlaylist', trackSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema
require('mongoose-type-url');

const trackSchema = new Schema({
    addTrack:{
        type: mongoose.SchemaTypes.Url, 
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
});




module.exports = mongoose.model('TrackPlaylist', trackSchema);
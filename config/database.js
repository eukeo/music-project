const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://eukeo:Laxxmznegmkys1994!@cluster0.v7vod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db = mongoose.connection
db.on('connected', () => {
    console.log(`Listening on ${db.host} at ${db.port}`)   
});
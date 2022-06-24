// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://midtermdhavalbhai:8z27lF9ZmaIbIluu@cluster0.t8w8e5c.mongodb.net/test";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}
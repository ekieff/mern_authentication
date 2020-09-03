const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

//mongoose connection object
const db = mongoose.connection;

//set up an event listener to fire once when the connection opens
//console log what host and port it's running on

db.once('open', () =>{
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', (error) =>{
    console.log(`Database error\n${error}`);
});

module.exports.User = require('./User');
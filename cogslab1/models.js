var Mongoose = require('mongoose');

//This is the database schema
var ImgSchema = new Mongoose.Schema({
		"image": { type: String },
		"hashtag": { type: String}
});

exports.Img = Mongoose.model('Img', ImgSchema);
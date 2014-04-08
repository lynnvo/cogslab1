var dotenv = require('dotenv');
dotenv.load();

//add instagram api setup
var ig = require('instagram-node-lib');
ig.set('client_id',process.env.instagram_client_id);
ig.set('client_secret',process.env.instagram_client_secret);

exports.ig = ig; 
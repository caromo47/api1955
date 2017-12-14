var mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({
	name:{type: String, required: true}
}, {timestamps: true});

var people = mongoose.model('people', peopleSchema)

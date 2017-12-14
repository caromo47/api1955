var mongoose = require('mongoose');
var people = mongoose.model('people');
module.exports = {
	getall: (req,res)=>{
		people.find({}, (err,results)=>{
			err ? console.log(err) : res.json(results);
		});
	},
	add: (req,res)=>{
		people.create({name:req.params.name}, (err, success)=>{
			err ? console.log(err) : res.json(success);
		});
	},
	show: (req,res)=>{
		people.findOne({name:req.params.name}, (err,result)=>{
			err ? console.log(err) : res.json(result);
		});
	},
	remove: (req,res)=>{
		people.remove({name: req.params.name}, (err)=>{
			err ? console.log(err) : res.redirect('/');
		});
	}
















}

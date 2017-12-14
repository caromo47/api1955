var people = require('../controllers/quotes.js');

module.exports = (app)=>{
	app.get('/', (req,res)=>{
		people.getall(req,res);
	}),
	app.get('/new/:name', (req,res)=>{
		people.add(req, res);
	});
	app.get('/:name', (req,res)=>{
		people.show(req,res);
	});
	app.get('/remove/:name', (req,res)=>{
		people.remove(req,res);
	});
}

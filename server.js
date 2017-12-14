var express = require('express');
	path = require('path');
 	bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(4200, ()=>{
	console.log('listening on port 4200');
});

///<referance path="../typings/tsd.d.ts" />

import express = require('express');
import morgan = require('morgan');
import bodyParser = require('body-parser');
import ejs = require('ejs');
let path = require('path');

let app: express.Express = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false})); 
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

var todo_list = [
	{ todo_name: 'running' },
	{ todo_name: 'Walking' },
	{ todo_name: 'Talking' },
	{ todo_name: 'lerning typescipt' }
];

var complete_list = [
	{ todo_name: 'What Up boy' }
];

app.get('/', (req, res) => {
	var vm = {
		title : 'todo App',
		todo : todo_list,
		complete : complete_list
	};
	res.render('default', vm);  
}); 

app.post('/todo/add', (req, res) => {	
	todo_list.push(req.body);

	res.redirect('/');	
}); 

app.post('/todo/complete/:id', (req, res) => {
	
	complete_list.push(todo_list[parseInt(req.params.id)]);
	todo_list.splice(parseInt(req.params.id), 1);
	res.redirect('/');

}); 

app.post('/todo/delete/:id', (req, res) => {
	complete_list.splice(parseInt(req.params.id), 1);
	res.redirect('/');
}); 

let port = process.env.PORT || 3000;
let server = app.listen(port, function(){
	let serverPort = server.address().port;
	console.log('server id listening on post %s', serverPort);	
});

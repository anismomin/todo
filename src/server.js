///<referance path="../typings/tsd.d.ts" />
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
app.get('/', function (req, res) {
    var vm = {
        title: 'todo App',
        todo: todo_list,
        complete: complete_list
    };
    res.render('default', vm);
});
app.post('/todo/add', function (req, res) {
    todo_list.push(req.body);
    res.redirect('/');
});
app.post('/todo/complete/:id', function (req, res) {
    complete_list.push(todo_list[parseInt(req.params.id)]);
    todo_list.splice(parseInt(req.params.id), 1);
    res.redirect('/');
});
app.post('/todo/delete/:id', function (req, res) {
    complete_list.splice(parseInt(req.params.id), 1);
    res.redirect('/');
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var serverPort = server.address().port;
    console.log('server id listening on post %s', serverPort);
});

//const data= require('./data.js');

const express = require('express');
const app = express();
const parser = require('body-parser');

const cors = require('cors');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('users.sqlite');

app.use(cors());
app.use(parser.json());

app.get('/listUsers',(req,res)=>{
	const q = 'SELECT * FROM users';
	queryAndRespond(q,res);
});

app.get('/user/:id',(req,res)=>{
	const q = 'SELECT * FROM users where rowid=${req.params.id}';
	queryAndRespond(q,res);
});

app.post('/addUser',(req,res)=>{
	console.log(req.body);
	const user = req.body;
	const q = 'instert int users ("name","password","profession") values('${user.name}','${user.password}','${user.profession}')';
	console log(q);
	db.run(q,(err)=>{
		if(err){
			res.send('Error executing query');
		}else{
			res.send('ALL OK');
		}
	});
	res.send('ALL OK');
});

app.post('/deleteUser',(req,res)=>{
});

function queryAndRespond(q,res){
	db.all(q,(err,rows)=>{
		if(err){
			console.err('Error querying db.');
			res.send('Error querying db.');
		} else{
			res.send(JSON.stringify(rows));
		}
	});	
};

app.listen(3000);

console.log(data.lastname);
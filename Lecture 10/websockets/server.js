const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

app.use(express.static('public'));

let counter = 0;

app.ws('/echo',function(ws,req){
	console.log('Conection Established');
	ws.on('message',function(msg){
		console.log(msg);
		ws.send(msg);
	});
	setInterval(()=>{
		ws.send(countrer);
		counter++;
	},1000)
});

app.listen(3000);
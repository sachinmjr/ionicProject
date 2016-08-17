var express = require('express');
var provider = require('./js/providers/provider');
var app = express();

app.use('/user',require("./routes/loginRoutes"));

app.set('port', 3000);

provider.openAll(function(error)
{
	if(error)
	{
		console.log(error);
	}
	else
	{
		console.log('Database connected ');
		app.listen(app.get('port'), function () 
		{
		  	console.log('Listening on port 3000!');
		});
	}
})


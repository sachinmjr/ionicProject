
var loginRequest = require('./loginRequest');
module.exports = function()
{
	var express = require('express');
	
	var app = express();

	app.post('/login',loginRequest.create);

	return app;
}();
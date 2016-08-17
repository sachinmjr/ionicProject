// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
var mongodbcon=null;


function Login (){}

Login.prototype.getCollection = funtion(dName,callback)
{

	MongoClient.connect("mongodb://localhost:27017/"+dName, function(err, db) 
	{
  	if(err) 
	  {
	  	console.log("Failed to connect");   	    
	    callback({msg:err});
	  }
	  else
	  {
	  	console.log("We are connected");
	  	callback(null,db);
	  }
	});
}

Login.prototype.login = function(detail,callback)
{

	this.getCollection('userDetail',function(error,collection)
	{
		if(error)
		{
			callback(error);
		}
		else
		{
			collection.insert(detail,{safe:true},function(error,result)
			{

				if(error)
				{
					callback(error);
				}
				else
				{
					callback(null,result);
				}
			})
		}
	})
}
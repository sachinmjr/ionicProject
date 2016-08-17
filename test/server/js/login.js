

var loginValidator = require('./loginValidator');

var loginProviders = require('./providers/loginProvider');

exports.create = function(detail,callback)
{

	loginValidator.validate(detail,function(error,status)
	{
			if(error)
			{
				callback({msg:'@not valid'});
			}
			else
			{
				loginProviders.login(detail,function(error,result)
				{
					if(error)
					{
						callback({msg:error});
					}
					else
					{
						callback(null,result);
					}
				})
			}
	})

}
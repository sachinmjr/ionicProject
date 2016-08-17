

var login = require('./js/login');

exports.create = function(req,res,next)
{
	var detail  = {
		userName : req.body.uname,
		pass : req.body.uname
	};

	login.create(detail,funtion(error,result)
	{
		if(error)
		{
			res.json({errMsg:error.msg,status: "fail");					
		}
		else
		{
			res.json({errMsg:null,status :"ok", res:result});
		}
	})

}


exports.validate = function(detail,callback)
{
	if(!detail.hasOwnProperty('uname'))
	{
		callback({msg:"@usernameMissing"});
	}
	else
	{
		callback(null);
	}
}
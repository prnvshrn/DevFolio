var express = require('express');
var app = express();
const octokit = require('@octokit/rest')()

app.get('/info/:name', function(req, res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	//get Information for Repository
	octokit.repos.getForUser({username:req.params.name, 
		sort:'created',
		direction: 'asc'
	}).then(result => {
			var user_data = '"temp":[';
			for (x in result['data']){
				user_data = user_data + '{"name":' + result['data'][x]['name'] + ',';
				user_data = user_data + '"description":' + result['data'][x]['description'] + ',';
				user_data = user_data + '"language":' + result['data'][x]['language'] + '},';
				console.log(result['data'][x]['name'], result['data'][x]['description'], result['data'][x]['language']);
			}
			user_data = user_data.substring(0, user_data.length - 1);
			user_data = user_data + ']';
			console.log(user_data);
			try{
			res.send(result);}
			catch(e){console.log(e);}
	})
})

const port = process.env.PORT || 3001;
app.listen(port);
console.log('Started on port 3001');
var express = require('express');
var app = express();
const octokit = require('@octokit/rest')()

app.get('/info/:name', function(req, res){

	//get Information for Repository
	octokit.repos.getForUser({username:req.params.name, 
		sort:'created',
		direction: 'asc'
	}).then(result => {
		res.send(result);
			for (x in result['data']){
				console.log(result['data'][x]['name'], result['data'][x]['description'], result['data'][x]['language']);	
			}
	})
})

const port = process.env.PORT || 3001;
app.listen(port);
console.log('Started on port 3001');
'use strict';

require('dotenv').load({silent: true});

const express =  require('express');
const app = express();
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var text = "In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since. \“Whenever you feel like criticizing any one,\” he told me, \“just remember that all the people in this world haven’t had the advantages that you’ve had.\"";

var input = { "text": text };

var params = 
	        {
			        'tone_input': input,
			        'content_type': 'application/json'
			        };

const toneAnalyzer = new ToneAnalyzerV3({
	apikey: process.env.TONE_ANALYZER_IAM_APIKEY,
	version:'2017-09-21'
});

app.get("/", (req,res) => {
	console.log("Responding to root");
	res.send("Hello there");
});

app.get('/api/tone', function(req, res, next) {
	toneAnalyzer.tone(params, function(err, data) {
		if (err) {
			return next(err);
		}
var tone = JSON.stringify(data, null, 2);
		console.log(tone);

		return res.json(data);
	});
});

app.listen(3000, () => {
	console.log("server is working");
})

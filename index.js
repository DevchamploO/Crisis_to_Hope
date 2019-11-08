require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

/*app.get('/api/getList', (req, res) => {
	var list = ["item1", "item2", "item3"];
	res.json(list);
	console.log('Sent list of items');
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});*/

const utils = require('./utils');

const Twit = require('twit');

const client = new Twit({
	consumer_key: 'hSuBC2xLCImFf2rwiz2NiLfsm',
	consumer_secret: 'e3lm8qH5jOjbtGl6JiK17H668CHQXzA8iST4pKjC1iggsthKPE',
	access_token: '37338499-Sc6ADge8bHqRidKaqCOtQxXX5odpJx0tYzGRfa0uO',
	access_token_secret: 'VnN8URqC7slaB57IQEiWV7u1Mtgc3CDdMwqyyq1IzhbHp',
	timeout_ms: 60 * 1000
});

const locale = ['40.730610', '-73.935242', '4mi'];
const twit_params = {
	geocode: locale,
	count:200
}

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const toneAnalyzer = new ToneAnalyzerV3({
	apikey: process.env.TONE_ANALYZER_IAM_APIKEY,
	version: '2017-09-21'
});
let filter_words = utils.get_filter_words();
let filtered_tweets = [];
let sad_tweets = [];
let tones_raw = [];

app.get('/api/getList', function(req, res) {
	client.get('/search/tweets', twit_params, function(err, data, response) {
		let tweets = data.statuses;
		let num;
		tweets.forEach(function(a_tweet) {
			num = 0;
			filter_words.forEach(function(word) {
				let pattern = new RegExp("\\b|WORD|\\b".replace('|WORD|', word), 'ig');
				if(a_tweet.text.match(pattern)) {
					num = num + 1;
				}
			});
			if(num >= 2) {
				filtered_tweets.push(a_tweet);
			}
		});
		for(let i=0; i<filtered_tweets.length; i++) {
			toneAnalyzer.tone({'tone_input': {'text':filtered_tweets[i].text}, 'content_type': 'application/json'}, function(err, tonedata) {
				//tones.push(tonedata)
				if (err) {
					return err;
				}
				let hasSad = false;
				for(let j=0; j<tonedata.document_tone.tones.length; j++) {
					if(tonedata.document_tone.tones[j].tone_id == 'sadness' && tonedata.document_tone.tones[j].score > .60) {
						hasSad = true;
						sad_tweets.push(filtered_tweets[i]);
					}
				}
				if (hasSad === false) {
					filtered_tweets.splice(i, 1);
					console.log("removed")
				}
			});
		}
	});

	console.log(sad_tweets.length);
	let list = {statuses: sad_tweets};
	res.json(list);
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port' + port);
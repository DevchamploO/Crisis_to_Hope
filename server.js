'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const port = 3001;

//require('dotenv').load({silent: true});
const utils = require('./utils');

const Twit = require('twit');

const client = new Twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
	timeout_ms: 60 * 1000
});

const sanFrancisco = ['-122.75', '36.8', '-121.75', '37.8']
var stream = client.stream('statuses/filter', {locations: sanFrancisco });
const locale = ['37.782257', '-122.398720', '1mi'];
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

app.listen(port, () => console.log('server is working'));

/*app.get('/express_backend', (req, res) => {
	res.send({express: 'BACKEND IS CONNECTED'});
});*/

app.get('/express_backend', function(req, res) {
	client.get('search/tweets', twit_params, function(err, data, response) {
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
				if (err) {
					return err;
				}
				for(let j=0; j<tonedata.document_tone.tones.length; j++) {
					if(tonedata.document_tone.tones[j].tone_id == 'sadness') {
						filtered_tweets.splice(i, 1);
					}
				}
			});
		}
		console.log(filtered_tweets.length);
		let json_tweets = {statuses: filtered_tweets};
		res.send(json_tweets);
		//res.send(data);
	//	res.send({express: JSON.stringify(data.statuses)});
	});
});

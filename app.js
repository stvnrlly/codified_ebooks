'use strict';

var natural = require('natural');
var fs = require('fs');
var Twit = require('twit');
require('dotenv').config();

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

fs.readFile('./titles.txt', function(err, data) {
  var bills = data.toString().split('\n');
  var processed = {};
  for (var i in bills) {
    var split = bills[i].split(' ');
    // split.unshift('[start]'); split.push('[end]');
    var gram = natural.NGrams.bigrams(split, '[start]', '[end]');
    for (var g in gram) {
      try {
        processed[gram[g][0]].push(gram[g][1]);
      } catch (e) {
        processed[gram[g][0]] = [];
        processed[gram[g][0]].push(gram[g][1]);
      }
    }
  }
  build(processed);
});

function build(dict) {
  var result = [];
  var word = '';
  result.push(dict['[start]'][Math.floor(Math.random() * dict['[start]'].length)]);
  while (word !== '[end]') {
    var previous = result.slice(-1);
    word = dict[previous][Math.floor(Math.random() * dict[previous].length)];
    result.push(word);
  }
  tweet(result.slice(0,-1).join(' '));
}

function tweet(text) {
  T.post('statuses/update', {
    status: text
  }, function(err, data, response) {
    if (err) {
      console.log(err);
    }
    // console.log(data);
  });
}

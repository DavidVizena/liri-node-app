require("dotenv").config();

var keys = require('./keys.js');

var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var input1 = process.argv[2];
var input2 = process.argv[3];
var input3 = process.argv[4];



// Just following directions

switch (input1) {
    case 'my-tweets':
        client.get('statuses/user_timeline', function (error, tweets, response) {
            if (error) throw error;
            
            for (i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            }
        })

        break;
    case 'spotify-this-song':
        spotify.search({ type: 'track', query: input2 }, function (err, data) {
            if (err) throw err

            for (i=0; i < data.tracks.items.length; i++){
                if (data.tracks.items[i].name === input2){
                    console.log(data.tracks.items[i].name);
                }
            }
            
        });
        break;
    default:
        console.log('not a command bro');
        break;
}
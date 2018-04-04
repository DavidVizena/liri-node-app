var dotenv = require("dotenv").config();
var request = require("request");
// var fs = request("fs");


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

                // if (data.tracks.items[i].name === input2) {
                    // }
                    // GETS ARTIST
                    console.log(JSON.parse(JSON.stringify(data.tracks.items))[0].album.artists[0].name);
                    // GETS SONG NAME
                    console.log(JSON.parse(JSON.stringify(data.tracks.items))[0].name);
        });

        break;
    case 'movie-this':
        var queryURL = "https://www.omdbapi.com/?t=" + input2 + "&y=&imdbRating=&tomatoRating=&country=&language=&plot=short&actors=&apikey=trilogy";

        request(queryURL, function (error, response, body) {
            if (error) throw error;

            console.log(`
                Title: ${JSON.parse(body).Title} 
                Year: ${JSON.parse(body).Year}
                IMDB Rating: ${JSON.parse(body).imdbRating}
                Rotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}
                Country: ${JSON.parse(body).Country}
                Language: ${JSON.parse(body).Language}
                Plot: ${JSON.parse(body).Plot}
                Actors: ${JSON.parse(body).Actors}
                `);
        });

        break;

    case 'do-what-it-says':
        if (err) throw err;

        // fs.readFileSync('./random.txt', function(){
            
        // });

    break;

    default:
        console.log('not a command bruhhh');
        break;
}
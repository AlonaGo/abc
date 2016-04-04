
console.log("hey there");

var Twit = require('twit');

var config = require ('./config');
var T = new Twit(config);

var exec = require('child_process').exec;	





tweetIt();

var cmd = 'processing-java -- sketch=`pwd`/cats2 --run';

exec(cmd, processing);

function processing(){
	var b6
}

var tweet = {
	status: txt
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
  if (err){
console.log ("something is not right");
  } else{

	console.log("its working!")
  		}
	}
}





/*
//setting up a stream

	var stream = T.stream('user');

//anytime someone follows me
stream.on ('folloe', followed);

function followed(event){
	var name = event.source.name;
	var screenName = event.source.screen_Name;
	tweetIt('.@' + screenName + 'heloo there');

}



tweetIt();

function tweetIt(txt){

	var r = Math.floor(Math.random()*100)
var tweet = {
	status: txt
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
  if (err){
console.log ("something is not right");
  } else{

	console.log("its working!")
  		}
	}
}


*/

//---------------------------------------------


/*//  tweet 'hello world!'
//

setInterval(tweetIt, 1000*60)

tweetIt();

function tweetIt(){

	var r = Math.floor(Math.random()*100)
var tweet = {
	status: 'i love numbers' + "  " + r + "  " + 'hellooooooo'
}
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
  if (err){
console.log ("something is not right");
  } else{

	console.log("its working!")
  		}
	}
}*/



//-------------------------------------


//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//

/*var params = {
	q: 'kardashian', 
	count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
	var tweets = data.statuses;
		for(var i = 0; i < tweets.length; i++ ){
 	console.log(tweets[i].text);
 	}
}*/
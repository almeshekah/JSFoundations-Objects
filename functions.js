/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

const channels = require("./channels.json");

/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  // Your code here
  return channel.name;
}

//console.log(getChannelName(channels[0]));

/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  // Your code here
  return channel.videos.length;
}
//console.log(numberOfVideos(channels[0]))
//-------------------------------------------------------------------------------------------------
/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  // Your code here
  
  //return channel.videos.filter((arrayElement) => arrayElement['title'] === videoTitle);

  return channel["videos"].some((video) => video.title.toLowerCase() === videoTitle.toLowerCase());
  //let res = channel.some(fidcc());
  //function fidcc (ch){
    //return ch.videos[0].title === channelName;
  //}
  //return res;
  //return channel["videos"].some((video) => channel.videos[0].title === videoTitle);
}

  

  

  //return channel["videos"].some((video) => videos.title === videoTitle);
  //channel.videos.filter((array) => );


  


//console.log(channelHasVideo("The Universal S", channels[0]));
//console.log(channelHasVideo("The Universal S", channels[1]));

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  // Your code here
  return channels.find((channel)=> channel.name === channelName);


 /* let res = channels.find(fidcc);
  function fidcc (channel){
    return channel.name === channelName;
 }
  return res;*/
}
//console.log(getChannelByName("PowerfulJRE", channels));

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  // Your code here
  return channels.find((channel)=>channelHasVideo(videoTitle,channel));
  /*let res = channels.find(fidcc);
  function fidcc (channel){
   //return  channel["videos"].some((video) => channel.videos[0].title === videoTitle);
  }
  return res;*/
}
//console.log(channelHasVideo("The Universal S", channels));

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  // Your code here
  return channels.filter((channel) =>channel.description.includes(query)|| channel.name.includes(query));
  
}
 //console.log(searchChannels("the", channels))

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
};

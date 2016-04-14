var Sound = require('node-mpg123');
var memwatch = require('memwatch-next');

// print to console if memory leak detected
memwatch.on('leak', function(info) { console.log(info); });

// initialize sound
var sound = new Sound('bg.mov');

// play for the first time
sound.play();
setInterval(function(){
  // repeat song every 3 mins 22.508 seconds
  // clip is 3 mins 22.507 seconds  long
  console.log("Restarting song");
  sound.play();
}, 202508);

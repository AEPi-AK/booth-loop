var Sound = require('node-mpg123');
var memwatch = require('memwatch-next');

memwatch.on('leak', function(info) { console.log(info); });

// fire and forget:
var sound = new Sound('bg.mov');

sound.play();
setInterval(function(){
  sound.play();
}, 202508);

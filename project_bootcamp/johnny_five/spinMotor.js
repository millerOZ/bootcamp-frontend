/*
  ## Spin Motor Spin (Exercise 3 of 9)  
   
  Attach a motor to pin 9 and start it spinning!  
   
   » Spin the motor at 200 mph                                                   
   » Use board.wait to stop the motor spinning after 2 seconds                   
   » Start it spinning again after another second                                
   » Ensure this loop repeats infinitely                                         
   
  Hint: You could use the motor start and stop events to stop/start the  
  motor.  
*/

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
	console.log("ready!");

	var motor = five.Motor(9)
       
       	motor.on('start', function(err,timestamp){
       		board.wait(2000, function(){
       			motor.stop();
       		});

       	}); 
     	
     	motor.on('stop', function(err,timestamp){
     		board.wait(1000, function(){
     			motor.start(200);
     		})
     	});

         motor.start(200);
});
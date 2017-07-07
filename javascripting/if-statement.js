/*
In that file, declare a variable named fruit.  
   
  Make the fruit variable reference the value orange with the type of  
  String.  
   
  Then use console.log() to print "The fruit name has more than five  
  characters." if the length of the value of fruit is greater than five.  
  Otherwise, print "The fruit name has five characters or less."  
   
  Check to see if your program is correct by running this command:  
   
     javascripting verify if-statement.js  

*/
var fruit = 'orange'.toString()
 if(fruit.length >= 5){
      var msg = console.log('The fruit name has more than five characters.')
  }
 else{
      msg = msg.replace('more than five','five characters or less.')
 }

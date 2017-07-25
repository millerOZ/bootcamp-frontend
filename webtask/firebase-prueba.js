import {config} from '../common/config';
import {firebaseSecret} from '../common/config-secret';
import {AddTasksCommand, Task} from '../common/model';

var request = require('request'); /* solicitud url de flickr*/ 


module.exports = function(ctx, cb) {
/*URL:https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=31f89d39773fe830deb3f6af7199a266&tags=leone&per_page=1&page=1&format=json&nojsoncallback=1  */
  /*firebase conf */
  /*
   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAntHyh-9kVo_KUS3nCAcyqODFxzjVm8NM",
    authDomain: "webtask-4a7b1.firebaseapp.com",
    databaseURL: "https://webtask-4a7b1.firebaseio.com",
    projectId: "webtask-4a7b1",
    storageBucket: "webtask-4a7b1.appspot.com",
    messagingSenderId: "724255834815"
  };
  firebase.initializeApp(config);
  */
  const taskUrl = '${config.firebase.databaseURL}/tasks.json?auth=${firebaseSecret}';
  const command = AddTasksCommand.ctx.body.text ;
  console.log('Received command: ${JSON.stringify(command)}');
  
  const task: Task = {
    content: command.content,
    created: Date.now()
  };
 
 const requestOptions = {
   method: 'POST',
   url: taskUrl,
   json: task
 }; 
  
  request(requestOptions, () => cb(null, 'finished'));
  
  /* -----------------------*/
  var tag = ctx.body.text.replace(ctx.secrets.TRIGGER_WORD, ''); 
  const request_url = 'https://api.flickr.com/services/rest/';
  var url = request_url + '?method=flickr.photos.search'
              + '&api_key=' + ctx.secrets.APP_KEY
              + '&tags=' + tag
              + '&per_page=1'
              + '&page=1'
              + '&format=json'
              + '&nojsoncallback=1';
    /*console.log(url);   */
  request.get(url, function(error, res, body){
    if(error){
      console.log(error);
      cb(null, error);
    }else{
      var result = JSON.parse(body);
      var photoId = result.photos.photo[0].id;
      
/* URL: https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=31f89d39773fe830deb3f6af7199a266&photo_id=34854850083&format=json&nojsoncallback=1*/      
      var url = request_url + '?method=flickr.photos.getSizes'
                  + '&api_key=' + ctx.secrets.APP_KEY
                  + '&photo_id=' + photoId
                  + '&format=json'
                  + '&nojsoncallback=1';
   /*   console.log(url); */
    request.get(url, function(error, res, body){
        if(error){
          console.log(error);
          cb(null,error);
        }else{
          result = JSON.parse(body);
          var picUrl = result.sizes.size[4].source;
          var attachments = { attachments : createAttachment(tag, picUrl) };
          /*cb(null, {text: picUrl})*/
          cb(null, attachments );
        }
      }); 
      
    }
  });         
};
function createAttachment(tags, photoUrl){
  var attachment = {
    color: '#36a64f',
    text: 'you searched for with this tag: ' + tags,
    image_url: photoUrl
  };
  var attachments = [ attachment ];
  return attachments;
}









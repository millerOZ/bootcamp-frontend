# webtask - flickr #

Implementación de un Bot en los canales de * webtask *
que muesta una imagen sobre la palabra pasada .

uso de la API de ~~flicr~~ Flickr por su sencilles .
## Pasos a paso ##

### generar key en flickr ###
se necesita de una cuenta en flickr para poder crear un App an Garden y poder obtener el ** key ** ,de esta manera establever la conexión con  * webtask * .
* ir a la pagina de flickr
* entrar en servives apps
* crear un __ *app an Garden* __
   1. Request an __ API Key __  
   1. APPLY FOR A NON-COMMERCIAL KEY
   1. nombre del ** App ** , ** descripción **
   1. Aceptar terminos
* entrar en Get you API KEY ** Request an API Key ** y copiar el key a * webtask *
    1. en el apartado de configuraciones de * webtask * la opción secret
    1. creamos una variable con el nombre ** APP_KEY ** , pegamos el key que optuvimos en flickr
    1. creamos una variable con el nomnre ** TRIGGER_WORD ** , escribimos el nombre que vamos a usar para buscar imagenes ej : `Bot dog` , *TRIGGER_WORD* : **Bot**, imagen a mostrar * dog *

### metodos que se usaron del API ###
*flickr.photo.search:*
* tags: se seleciona en la lista de argumentos, se llena el texbox con cualquier valor
* se seleciona tambien: *per_page* = 1 y *page* = 1 de la misma lista
* Elegimos como formato de salida **JSON**
* luego elegimos *Do not sign call?*

Lo anterior nos negera la siguiente :
[URL generada](https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=10d45badcee01e477e4d56b5f285fda3&tags=leone&per_page=1&page=1&format=json&nojsoncallback=1)
`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=10d45badcee01e477e4d56b5f285fda3&tags=leone&per_page=1&page=1&format=json&nojsoncallback=1`


## código en webtask explicación ##

``` javascript
var request = require('request'); /* solicitud url de flickr*/
module.exports = function(ctx, cb) {
/*URL:https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=31f89d39773fe830deb3f6af7199a266&tags=leone&per_page=1&page=1&format=json&nojsoncallback=1  */

//implementación del metodo flickr.photos.search
  var tag = ctx.body.text.replace(ctx.secrets.TRIGGER_WORD, '');
  const request_url = 'https://api.flickr.com/services/rest/';
  var url = request_url + '?method=flickr.photos.search'
              + '&api_key=' + ctx.secrets.APP_KEY
              + '&tags=' + tag
              + '&per_page=1'
              + '&page=1'
              + '&format=json'
              + '&nojsoncallback=1';

  request.get(url, function(error, res, body){
    if(error){
      console.log(error);
      cb(null, error);
    }else{
      var result = JSON.parse(body);
      var photoId = result.photos.photo[0].id;

/* URL: https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=31f89d39773fe830deb3f6af7199a266&photo_id=34854850083&format=json&nojsoncallback=1*/     
// implementación del metodo flickr.photos.getSizes
      var url = request_url + '?method=flickr.photos.getSizes'
                  + '&api_key=' + ctx.secrets.APP_KEY
                  + '&photo_id=' + photoId
                  + '&format=json'
                  + '&nojsoncallback=1';

    request.get(url, function(error, res, body){
        if(error){
          console.log(error);
          cb(null,error);
        }else{
          result = JSON.parse(body);
          var picUrl = result.sizes.size[4].source;
          var attachments = { attachments : createAttachment(tag, picUrl) };

          cb(null, attachments );
        }
      });

    }
  });         
};
//función para personalizar la busqueda, diseño  
function createAttachment(tags, photoUrl){
  var attachment = {
    color: '#36a64f',
    text: 'Tu busqueda de : ' + tags,
    image_url: photoUrl
  };
  var attachments = [ attachment ];
  return attachments;
}

 ```

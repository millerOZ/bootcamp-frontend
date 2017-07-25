### Ajax ###
 trae informacion sin tener que recargar la pagina
  ~~no usar jquery~~

# importante #

 * fletch soportado por javascript, usa promesas es el remplazo de jquery

```javascript
/*console.log("hola");

setTimeout(() => {
  console.log("bye");
}, 2000);

console.log("hola de nueo");
*/

/*function saidBye(callback) {
  console.log("paso 2");
  //setTimeout(function () {
    console.log("bye");
    console.log("paso 3");
    callback();
  //}, 2000);
}

console.log("paso 1");
console.log("hi");

function callback() {
  console.log("paso 4");
  console.log("hi again");
}

saidBye(callback);*/

// Ejemplo 2 de callbacks
/*function sumar(a, sumeAyB) {
  var b = 5;

  console.log("paso 2");
  sumeAyB(b);
}

var a = 1;
function sumeAyB(b) {
  console.log("paso 3");
  console.log(a + b);
}

console.log("paso 1");
sumar(1, sumeAyB);
*/
//***************************
// ejemplo 3 de callbacks
// imitacion de un map
/*function myMap(arr, callback) {
  console.log("paso 2, tengo array y callback");
  const _arr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log("itera :", arr[i]);
    const respuesta = callback(arr[i]);
    _arr.push(respuesta);
    console.log("el valor del array es:", _arr);
  }
  return _arr;
}

function pow(val) {
  console.log("ejecuta el callback para: ", val);
   console.log("la potencia es ", val * val);
  return val * val;
}

const arr = [1,2,3,4,5];
console.log("paso 1");
const powArr = myMap(arr, pow);
console.log(powArr);
*/

// ejemplo de un map
//***************************
/*const x = [ {name: "sergio"},"sergio","myleidy","luisa"];

function mayusculas(elemento) {
  if (typeof elemento == "object") {
   return elemento.name.toUpperCase();
  }
  return elemento.toUpperCase();
}
const y = x.map(mayusculas)

console.log(y);
*/


//**************************************
// ejemplo promise
/*const p = new Promise(function (resolve, reject) {
//ejecute la promesa que quiero que haga:    
// si la promesa funciona
    resolve("preparar cafe:");
});
 //si la promesa funciono, cuando acabe de ejecutarse lo que asigne adentro de
 //a promesa haga eso
p.then(function(msg) {
  console.log(msg);
  return msg + " 1. calentamos agua\n";
})
.then(function (msg1) {
  console.log(msg1);
  return msg1 + " 2. agregamos el cafe\n";
})
.then(function (msg2) {
  console.log(msg2);
  return msg2 + "3. agregamos azucar\n";
})
.then(function (msg3) {
  console.log(msg3 + " disfrute")
})

*/

const url = "https://api.themoviedb.org/3/discover/movie?api_key=461db800c27fdda30417dbf9e3f33b67&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
const list = document.getElementById("list");

function createTitle(title) {
  const title = document.createElement("h2");
   title.innerHTML = title + "";
  return title;
}

function createImage(imageURL) {
  const image = document.createElement("img");
  image.setAttribute('src', imageURL);
  image.setAttribute('height', 150);

  return image;
}

function createItem(movie) {
  const urlImage = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  const image = createImage(urlImage);
  const title = createTitle(movie.title);
  const el = document.createElement("li");
  el.classList.add('item');
  el.appendChild(title);
  el.appendChild(image);
  return el;
}

fetch(url)
  .then(function(response) {
    //console.log(response.staatus);
    return response.json()
  })
  .then(function(json) {
    //console.log(json);
     json.results.forEach(function (el) {
       list.appendChild(createItem(el));
     });


})
```

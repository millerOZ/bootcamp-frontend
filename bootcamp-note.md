# Aprendiendo __markdown__  #
## menu ##
1. definición
1. Sintaxis
1. ejemplo

### definición ###
> Aunque en realidad Markdown también se considera un lenguaje que tiene la finalidad de permitir crear contenido de una manera sencilla de escribir, y que en todo momento mantenga un diseño ~~legible~~, así que para simplificar puedes considerar *Markdown* como un método de escritura. (*https://markdown.es/*)

### Sintaxis ###
1.  pequeña lista de los *markdown* mas usados _ejemplo:_
  1. **Negrita**  `**text**`
  1. ~~tachado~~  `~~text~~`
  1. *cursiva* `*text*`
  1. link `[title](http://)`
  1. H1 `# text #`
  1. H2 `## text ##`
  1. H3 `### text ###`


1. para añadir una foto desde **markdown** `![foto](http://..)`
### Ejemplo ###
1.
# Aprendiendo __Git__  #
## menu ##
1. definición
1. comando con su definición

### definición ###
**Git** es un sistema de control de versiones que usan los desarrolladores

### comandos con su definición ###
1. **git init** creamos un nuevo repositorio (local)
1. **git statis** inspeciona el contenido de working directory y staging area
1. **git add** añadimos archivos de working directory al staging area
1. **git dif** muestra las diferencias entre el working directory y el staging area
1. **git commit** almacenar permanentemente los cambios de los archivo para subir al repositorio
1. **git log** mostrar toda la lista del historial de los
1. **git checkout HEAD filename** descarta los cambios en el working directory
1. **gir reset HEAD filename** elimina los cambios en el archivo en el staging area
1. **git branch** lista todos los branch del directorio

# Aprendiendo __CSS__  #
## menu ##
1. definición
1. Recomendaciones
1. ejemplo

### defininicion ###
Resultado de imagen de css
Hojas de estilo en cascada (o CSS, siglas en inglés de Cascading Stylesheets) es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.

*em* Son la unidad relativa por excelencia, y a veces resulta confuso entenderla. Por definición un em es igual al valor del font-size del elemento al que pertenece. Si el elemento que contiene una propiedad en em no tiene un font-size definido, lo heredará del padre, o del primer ancestro con font-size declarado – si ninguno tiene font-size declarado, tomará el del HTML: 100% -Si un elemento tiene un font-size declarado, todo otro valor dado en em en ese mismo elemento equivale a ese *font-size:*.

`1em ` equivale a `14px`
`list-style-type:` sirve para cambiar el estilo a las viñetas en el listado
*
## Especificidad ##
la Especificidad gana a la cascada es un valor que adquieren los selectores y que determinan que reglas CSS (o estilos) se aplican a un elemento cuando existen conflictos


## pseudo clases ##
`:hover` cuando se pasa el cursor por ensima del elemento
`:active` Cuando se hace click
`:visited` un enlace al que ya se visito
`:focus` un campo de formulario seleccionado
`:empty` selecciona elementos vacios
`:not()` selecciona a los elementos que no coincidan con el selector pasado como parametro
`:selection` para aplicar estilos a la seleccion
`:target` selecciona el destino de un enlace interno


## Recomendaciones ##
mantenér el código
* ordenado
* simple
* sin repeticiones

`!importan` siempre gana sobre Especificidad
`!importan > Especificidad > cascada`
## ¿Como se calcula la Especificidad ? ##
* Etiquetas                 **: 1**
* Clases y pseudoclases     **: 10**
* Id                        **: 100**
* Estilos en linea          **: 1000**


### Aprendiendo Javascript ###

## menu ##
 * defininición
 * closure function
 * consejos

### definición ###
> La sintaxis es muy similar a otros lenguaje como Java y C, normas basicas que definen la sintaxis de **javascript** son las siguientes:
* *No se tiene en cuenta los espacios en blanco y las nuevas líneas*
* *Se distinguen las mayúsculas y minúsculas*
* *No se define el tipo de las variables*
* *No es necesario terminar cada sentencia con el caácter de punto y coma*
* *Se pueden incluir comentarios*
##### fuente: #####
 [librosweb.es](http://librosweb.es/libro/javascript/)

### closure function ###
El consepto es *clausurar* el contexto en el que se ejecuta una función,
_ejemplo__
```javascript
  function externa(x){
    var variable = 3;

    function interna(y){
      console.log(x + y + (++variable));
    }
    interna(10);
  }
  externa(2);
```
`> 16`
### consejos ###
* Usar `===` para comparar objetos, igualdad estricta
* mostar una ventana emergente solicitando la edad: `var age = prompt("cual es tu edad")`
* para escribir javascript dentro de un string `yo tengo ${age} años`
* Retorna el primer valor falso si existe `a && a.texto && a.edad`, hacer comprobaciones de carga de información
* Retorna el primer valor verdadero si existe `a || a.text || a.edad`
* El comando `let` a diferencia de `const`, permite reasignar
* para testear se usa `console.assert(suma(2,5) == 7, "esto debe ser verdad")`
* para pasar por valor un objeto se usa
``` javascript
var persona = Object.assign({},{nombre: "miller", apellido: "ossa"})```

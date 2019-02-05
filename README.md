
# Animaciones CSS

Una animación se define como la transición entre un punto A y un punto B. Las animaciones son una Interfaz web necesaria, ya que ninguna acción que ocurre en una pagina web se da de forma instantánea, y estas nos pueden ayudar a crear tiempos de espera mas agradables.

## Indice

-  [transition](#transition)
	-  [transition-duration](#transition-duration)
	-  [transition-delay](#transition-delay)
	-  [transition-property](#transition-property)
	-  [transition-timing-function](#transition-timing-function)
-  [transform](#transform)
	-  [rotate()](#rotate)
	-  [skew()](#skew)
	-  [traslate()](#traslate)
	-  [scale()](#scale)
	-  [transform-origin](#transform-origin)
	-  [perspective](#perspective)
	-  [perspective-origin](#perspective-origin)
-  [@keyframes](#keyframes)
-  [animation](#animation)
	-  [animation-name](#animation-name)
	-  [animation-duration](#animation-duration)
	-  [animation-delay](#animation-delay)
	-  [animation-iteration-count](#animation-iteration-count)
	-  [animation-direction](#animation-direction)
	-  [animation-timing-function](#animation-timing-function)
	-  [animation-fill-mode](#animation-fill-mode)
	-  [animation-play-state](#animation-play-state)
-  [will-change](#will-change)
-  [Sprite](#Sprite)
- [Animacion con Javascript](#animaciones-js)
	-  [.animate()](#animate)

<div  id='transition'/>

## Transition 

Define de manera resumida todas las propiedades que nos permitirán trabajar con una transición y se asignan mediante sus valores separados por un espacio.

Los valores que podemos utilizar para personalizar nuestra transición son:  
 		
 - **Duración** - se define en segundos (s) o milisegundos (ms). Esta propiedad es la *única requerida*.
 - **Retardo** - se define en segundos (s) o milisegundos (ms). 0 es su valor por defecto.
 - **Propiedades** - define un listado de propiedades separadas por coma que serán afectadas por *Transition* si cambian. Por defecto todas pueden ser afectadas.
 - **Aceleración** - define el tipo de aceleración que tendrá la transición. linear es su valor por defecto.

~~~
div { 
	width: 100px;
	height: 100px;
	background-color: red;
	
	/* transition: duracion retardo propiedad(es) aceleracion */
	transition: 2s 500ms background-color ease-in;
}

div:hover {
	background-color: blue;
}
~~~
Aquí estamos definiendo un cuadrado de 100*100 pixeles, con un color de fondo rojo, el cual, va a cambiar en su estado *:hover* a azul. El cambio entre un color y otro durara 2 segundo tendrá 500 milisegundos de retardo en su comienzo.

Para definir una transición también podemos usar directamente las sub-propiedades de *Transition*, las cuales son:

<div  id='transition-duration'/>

**transition-duration:** define el tiempo en segundos o ms que durara la transición cuando ocurra un cambio es las propiedades de la etiqueta al que el selector CSS hace referencia. Esta propiedad es la única que requerida para establecer una transición.

`transition-duration: 2000ms ó 2s;`

<div  id='transition-delay'/>

**transition-delay:** define un retardo en el comienzo de la transición cuando ocurra un cambio es las propiedades de la etiqueta al que el selector CSS hace referencia.

`transition-delay: 1000ms ó 1s;`

<div  id='transition-property'/>

**transition-property:** define un listado de propiedades separado por coma que podrán ser afectadas por la transición si ocurre algún cambio en su valor. Por defecto todas las propiedades podrán reaccionar.

`transition-duration: background-color, width, height;`

<div  id='transition-timing-function'/>

**transition-timing-function:** define un tipo de aceleración en la transición, la cual, puede tener los siguientes valores:
 - **ease:** define la aceleración rápida al inicio y muy leve al final (opción por defecto)
 - **ease-in:** define la aceleración leve al inicio y rápida al final
 - **ease-out:** define la aceleración rápida al inicio y leve al final
 - **ease-in-out:** define la aceleración leve al inicio y leve al final
 - **linear:** define un efecto sin aceleración, es decir, constante durante todo el trazo
 -  **steps(0):** define la aceleración en frames, que son los pasos que dará el selector para completarla.
 - **cubic-bezier (0, 0, 0, 0):** define una aceleración personalizada mediante una configuración avanzada, la cual, consta de 4 valores de -1 a 1. Para trabajar con esta configuración de una manera visual y mas simple se recomienda la pagina *http://cubic-bezier.com*.

<div  id='transform'/>

## transform

Define una o varias transformaciones para un selector mediante ciertos valores que modifican la rotación en grados , el sesgado / inclinación en grados, la posición en X & Y y la escala o tamaño en base a porcentaje.

<div  id='rotate'/>

Para *ROTAR* un elemento podemos utilizar diferentes valores, los cuales, llevan dentro de paréntesis la medida en grados (0deg) positivos o negativos que se aplicaran:

 - **rotate() / rotateZ()** - rotar el elemento en un plano 2D. Por defecto dirección de las manecillas del reloj. `transform: rotate(90deg);`
 - **rotateX()** - rotar el elemento en un plano 3D, tirando la parte superior (top) del elemento hacia el fondo por defecto. `transform: rotateX(90deg);`
 - **rotateY()** - rotar el elemento en un plano 3D, tirando la parte izquierda (left) del elemento hacia el fondo por defecto. `transform: rotateY(90deg);`
 - **rotate3d()** - rota de manera totalmente 3D el elemento, uniendo los 3 valores anteriores. Define con un 1 los valores a utilizar y como 4to parámetro la medida en grados que usaran (x, y, z, deg). `transform: rotate3d(1,1,1,90deg);`

<div  id='skew'/>

Para *SESGAR O INCLINAR* un elemento utilizamos el valor **skew(x, y)**, y dentro de sus paréntesis definimos la medida en grados positivos o negativos que se aplicaran para los ejes X & Y.

`transform: skew(45deg, 45deg);`

<div  id='traslate'/>

Para *TRASLADAR* o modificar la posición de un elemento podemos utilizar diferentes valores los siguientes valores, los cuales, llevan dentro de paréntesis la medida positiva o negativa que se aplicara:

 - **traslate(x, y)** - mueve el elemento a lo largo de su eje X & Y. `transform: traslate(100px, 200px);`
 - **traslateX()** - mueve el elemento únicamente a lo largo de su eje X. `transform: traslateX(100px);`
 - **traslateY()** - mueve el elemento únicamente a lo largo de su eje Y. `transform: traslateY(200px);`
 - **traslateZ()** - mueve el elemento en su profundidad (3D), el cual se acerca por defecto. Requiere que se defina la propiedad 'perspective'. `transform: traslateZ(400px);`
 - **traslate3d()** - mueve el elemento de manera totalmente 3D uniéndo los 3 valores anteriores. Define cada una de sus medidas separadas por coma (x, y, z). `transform: traslate3d(100px, 200px, 400px);`
 
<div  id='scale'/>

Para *ESCALAR* un elemento utilizamos el valor **scale(x, y)**, y dentro de sus paréntesis definimos la medida o medidas en porcentaje para sus ejes por separados que sera escalado el elemento. Dichos valores se definen mediante un numero en el que 0 es 0%, 1 es 100% o tamaño normal y así en adelante.

 `transform: scale(2);` =  `transform: scale(2, 2);`

La propiedad *transform* se ayuda de otras propiedades para lograr transformaciones aun mas personalizadas como son las siguientes:

<div  id='transform-origin'/>

**transform-origin:** define el eje o punto invisible sobre el que se va a mover una trasformación y se hace mediante 2 valores que hacen referencia a la posición X & Y. Por defecto este punto se ubica en el centro (50% 50%). `transform-origin: 0% 0%;` En este ejemplo se define el punto de origen arriba a la izquierda.

Esta propiedad puede recibir algunos valores pre-definimos para facilitar su uso que son los siguientes: *top, rigth, bottom, left, center*, dichos valores pueden ser usados juntos o por separado. `transform-origin: top left;`

<div  id='perspective'/>

**perspective:** define un contexto 3D para un elemento, especificando la distancia a la que se encuentra el espectador. Esta propiedad nos permite trabajar con algunas transformaciones 3D. `perspective:  100px;` En este ejemplo definimos una profundidad de 100px para el elemento.

<div  id='perspective-origin'/>

**perspective-origin:** define el origen desde donde se verán los elementos en el viewport, es decir, la referencia de punto donde se encuentra el espectador y se hace mediante 2 valores que hacen referencia a la posición X & Y. Por defecto el origen esta en el centro (50% 50%). `perspective-origin: 0% 0%;` En este ejemplo se define la posición del espectador arriba a la izquierda.

Esta propiedad puede recibir algunos valores pre-definimos para facilitar su uso que son los siguientes: *top, rigth, bottom, left, center*, dichos valores pueden ser usados juntos o por separado. 
`perspective-origin: top left;`

<div  id='keyframes'/>

## @keyframes

Es una regla CSS que especifica el código de una animación. Las animaciones se crean cambiando gradualmente un conjunto de propiedades por otras de manera totalmente personalizada mediante sub-selectores definidos por porcentajes entre 0% y 100% dentro de los cuales se definen las propiedad que van a cambiar en forma de secuencial.

~~~
/* Sintaxis */
@keyframes nombre { 
   0%{...}
   100%{...} 
}
~~~
~~~
/* Ejemplo */
@keyframes animacionPersonalizada { 
	0%{
	   background-color: red;
	   width: 100px;
	}
	35%{
	   background-color: blue;
	   width: 200px;
	}
	70%{
	   background-color: red;
	   width: 300px;
	}
	100%{
	   background-color: blue;
	   width: 400px;
	}
}
~~~
 Aquí estamos definiendo un @keyframes / animación, la cual, de comienzo tendrá un color de fondo rojo que ira cambiando alternativamente por un color azul, a la vez, definimos un ancho inicial de 100px que ira incrementando gradualmente hasta llegar a 400px.

*NOTA:* si no definimos propiedades iniciales, es decir, en el 0%{...}, la animación hará el cambio tomando los valores que tengan las propiedades a cambiar en el selector asignado.

*USO:* Para asignar una animación a un selector utilizamos la propiedad *Animation* o sus sub-propiedades, en las cuales, debemos definir como mínimo el nombre de la animación y su tiempo de duración.

<div  id='animation'/>

## animation

Nos permite definir en un selector de manera resumida todas las propiedades que nos permitirán trabajar con un @keyframes (animación) y se asignan mediante sus valores separados por un espacio.

Los valores que podemos utilizar para trabajar con un @keyframes (animación) son:  
 		
 - **Nombre (obligatorio)** - hace referencia al nombre del @keyframes que deseamos utilizar.
 - **Duración (obligatorio)** - define el tiempo que durara el @keyframes y podemos utilizar un valor en segundos (s) o milisegundos (ms).
 - **Retardo** - define el tiempo de retardo al comienzo de la animación y podemos utilizar un valor en segundos (s) o milisegundos (ms). El valor por defecto es 0.
 - **Repeticiones** - define la cantidad de veces que se repetirá el @keyframes, podemos utilizar *infinite* para que sea infinito. El valor por defecto es 1.
 - **Dirección** - define la dirección de la animación ya sea normal, es decir, del 0 al 100%, al revés (reverse) o alternativa (alternate). El valor por defecto es *normal*.
 - **Aceleración** - define el tipo de aceleración que tendrá la animación. El valor por defecto es *ease*.
 - **Relleno** - define las propiedades que mantendrá el objeto una vez que haya terminado la animación, ya sea la inicial (backwards), la final (forwards) o ambas(both). El valor por defecto es *backwards*.
 - **Estado** - define el estado de la animación, es decir, si se esta reproduciendo (running) o si esta en pausa (paused).

~~~
.cuadrado-animado {
	width: 100px;
	height: 100px;
	background-color: red;
  
	/* Valores requeridos */
	animation: mi-animacion 2s; 
	
	/* Valores requeridos + opcionales */
	animation: mi-animacion 2s 1s 5 alternate ease-out forwards running;
}

@keyframes mi-animacion {
	100% {
		transform: scale(1.5);
	}
}
~~~
Aquí estamos definiendo un @keyframes, el cual, escalara gradualmente un 150% el tamaño del elemento al que el selecto hace referencia. En el selector, es decir, la clase *cuadrado-animado* definimos mediante la propiedad *animation* el @keyframes (animación) que va a utilizar mediante el nombre (*mi-animacion*) con una duración de 2 segundos. Por otro lado como valores opcionales definimos un retardo de 1 segundo, se repetirá 5 veces, lo hará de manera alternativa, con una aceleración suave al final (ease-out), sus propiedades al final sera con la escala de 150% y su estado se corriendo (running)

Para definir un @keyframes en un selector también podemos usar las sub-propiedades de *Animation*, las cuales son:

<div  id='animation-name'/>

**animation-name:** define o hace referencia al nombre del @keyframes (animación) que deseamos utilizar.

`animation-name: mi-animacion;`

<div  id='animation-duration'/>

**animation-duration:** define el tiempo que durara el @keyframes y podemos utilizar un valor en segundos (s) o milisegundos (ms).

`animation-duration: 2s;`

<div  id='animation-delay'/>

**animation-delay:** define el tiempo de retardo para el comienzo de la animación y podemos utilizar un valor en segundos (s) o milisegundos (ms). El valor por defecto es 0.

`animation-delay: 1s;`

<div  id='animation-iteration-count'/>

**animation-iteration-count:** define la cantidad de veces que se repetirá el @keyframes, (podemos utilizar *infinite* para que sea infinita). El valor por defecto es 1.

`animation-iteration-count: 5;`

<div  id='animation-direction'/>

**animation-direction:** define la dirección de la animación ya sea normal, es decir, del 0 al 100%, al revés (reverse) o alternativa (alternate). El valor por defecto es *normal*.

`animation-direction: alternate;`

<div  id='animation-timing-function'/>

**animation-timing-function:** define el tipo de aceleración que tendrá la animación, la cual, puede tener los siguientes valores:
 - **ease:** define la aceleración rápida al inicio y muy leve al final (valor por defecto)
 - **ease-in:** define la aceleración leve al inicio y rápida al final
 - **ease-out:** define la aceleración rápida al inicio y leve al final
 - **ease-in-out:** define la aceleración leve al inicio y leve al final
 - **linear:** define un efecto sin aceleración, es decir, constante durante todo el trazo
 -  **steps(0):** define la aceleración en frames, que son los pasos que dará el selector para completarla.
 - **cubic-bezier (0, 0, 0, 0):** define una aceleración personalizada mediante una configuración avanzada, la cual, consta de 4 valores de -1 a 1. Para trabajar con esta configuración de una manera visual y mas simple se recomienda la pagina *http://cubic-bezier.com*.

<div  id='animation-fill-mode'/>

**animation-fill-mode:** define las propiedades que mantendrá el objeto una vez que haya terminado la animación, ya sea la inicial (backwards) por defecto, la final (forwards) o ambas(both).  El valor por defecto es *backwards*.

`animation-fill-mode: forwards;`

<div  id='animation-play-state'/>

**animation-play-state:** define el estado de la animación, es decir, si se esta reproduciendo (running) o si esta en pausa (paused). El valor por defecto es *running*.

`animation-play-state: running;`

<div  id='will-change'/>

## will-change

Avisa al navegador que propiedades de un selector pueden o van a cambiar, mejorando el rendimiento al evitar que el navegador vuelva a renderizar el objeto. Las propiedades se separan por coma.

`will-change: width, height;`

*NOTA:* Cabe mencionar que hay propiedades CSS como *transform* que ya están optimizadas y no necesitan del will-chance.

<div  id='Sprite'/>

## Sprite

Es una imagen gigante que tiene dentro múltiples imágenes, las cuales son ideales para realizar animaciones vivas parecidas a un gif.


![Sprite utilizado en el Proyecto](https://luisvalladaresc.github.io/animaciones-css/sprite/corazon.png "Sprite utilizado en el Proyecto")

*USO:* Este es un ejemplo de un sprite, los cuales, podemos utilizar como *background-image* en un contenedor de dimensiones especificas según el ancho y alto del sprite, de modo que muestre solo 1 imagen. Luego mediante un @keyframes (animacion) y la propiedad *background-position* podemos mover secuencial-mente su posición en X o Y. Para completar el proceso le definimos el @keyframes al selector asignando una aceleración (animation-timing-function) en etapas según las imágenes que tenga el sprite.

~~~
div.corazon {
	width: 100px;
	height: 100px;
	background-image: url('https://luisvalladaresc.github.io/Animaciones-CSS/sprite/corazon.png');

	animation: animacion-corazon 1s forwards;
	animation-timing-function: steps(28);
}

/* ANIMACION DE CORAZON */
@keyframes  animacion-corazon {
	0% {
		background-position: 0  0;
	}
	100% {
		background-position-x: right;
	}
}
~~~

<div  id='animaciones-js'/>

# Animaciones con Javascript

Javascript al igual que CSS nos permite crear animaciones o @keyframes y asignarlas a un objeto HTML, ademas, nos permite interactuar dinamicante con ellas y cambiar sus propiedades durante la ejecución.

<div  id='animate'/>

## .animate() 

Define una animación para un objeto HTML a través de 2 valores. El Primero es un array de objetos que representa el @keyframes (animación) donde se definen las propiedades CSS a modificar (los valores se escriben entre comillas) y el Segundo es un objeto con sus opciones como la duración, la cual, es la única obligatoria.

~~~
const contenedor = document.getElementById("container");

const animacionContenedor = contenedor.animate([
	{ width: "100px", opacity: 1}, // 0%
	{ width: "150px", opacity: 1}, // 25%
	{ width: "200px", opacity: 0}, // 50%
	{ width: "150px", opacity: 1}, // 75%
	{ width: "100px", opacity: 1}, // 100%
], {duration: 2000});
~~~
Aquí estamos definiendo una animación para el elemento con el id de *container*, el cual, aumentara su tamaño gradualmente de 100px a 200px y su visibilidad a 0 en su 50% y los restaura en su 100%.

NOTA: a la animaciones creadas con *.animate()* no podremos asignarle porcentajes personalizados, lo que hace este método es dividir el 100% entre los objetos definidos en el array, lo cual, de manera un poco mas compleja nos permite obtener el mismo resultado.

OPCIONES

 - **duration** - define la duración de la animación mediante un numero que hace referencia al tiempo en milisegundos.
 - **delay** - define el tiempo de retardo al comienzo de la animación mediante un numero que hace referencia al tiempo en milisegundos. El valor por defecto es 0.
 - **iterations** - define la cantidad de veces que se repetirá la animación, si deseamos que sea infinita debemos utilizar la palabra reservada de javascript *Infinity*. El valor por defecto es 1.
 - **direction** - define la dirección de la animación ya sea normal, es decir, del inicio al final (0% a 100%), al revés (reverse) o alternativa (alternate). El valor por defecto es *normal*.
 - **easing** - define el tipo de aceleración que tendrá la animación. El valor por defecto es *ease*.
  - **fill** - define las propiedades que mantendrá el objeto una vez que haya terminado la animación, ya sea la inicial (backwards), la final (forwards) o ambas(both). El valor por defecto es *backwards*.
 - **iterationStart**- define en el % en el que iniciara nuestra animación mediante un valor del 0 al 1 como 100%.

MÉTODOS INTERNOS

Si guardamos la animación en una variable podremos acceder a sus métodos internos, los cuales nos ayudaran a manejar las animaciones dinamicamente. Entre las mas importantes podemos mencionar:

 - **.play()** - corre la animación
 - **.pause()** - pausa la animación
 - **.cancel()** - cancela la animación
 - **.reverse()** - cambia la dirección de la animación
 - **.playState** - devuelve el estado actual de la animación
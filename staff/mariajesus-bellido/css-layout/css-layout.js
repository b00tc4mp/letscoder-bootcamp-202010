//CREAMOS CONTENEDOR Y CAJA CON document.createElement('div')

//Creamos el contenedor principal
var container = document.createElement('div'); 


//Creamos las cajitas superiores (1 vertical + 2 horizontales)

var boxTopVertical = document.createElement('div'); 
var boxTopHorizontal01 = document.createElement('div'); 
var boxTopHorizontal02 = document.createElement('div'); 

//Creamos las cajitas centrales (2 horizontales + 1 vertical)
var boxMiddleHorizontal01 = document.createElement('div'); 
var boxMiddleHorizontal02 = document.createElement('div'); 
var boxMiddleVertical = document.createElement('div'); 

//Creamos las cajitas inferiores (1 vertical + 2 horizontales)

var boxBottomVertical = document.createElement('div'); 
var boxBottomHorizontal01 = document.createElement('div'); 
var boxBottomHorizontal02 = document.createElement('div'); 


//CREAMOS TEXTO INDICATIVO PARA COMPROBAR QUE SE ALINEAN TODAS OK 

// Superiores 
boxTopVertical.innerText = "Superior Vertical"; 
boxTopHorizontal01.innerText = "Horizontal Superior 01"; 
boxTopHorizontal02.innerText = "Horizontal Superior 02"; 

//Zona media 

boxMiddleHorizontal01.innerText = "Zona media horizontal arriba 01"; 
boxMiddleHorizontal02.innerText = "Zona media horizontal abajo 02"; 
boxMiddleVertical.innerText = "Zona media vertical derecha";

//Zona inferior 

boxBottomVertical.innerText = "Inferior Vertical"; 
boxBottomHorizontal01.innerText = "Inferior Horizonal arriba 01"; 
boxBottomHorizontal02.innerText = "Inferior Horizontal abajo 02"; 


//HACEMOS EL APPEND - contenedor y boxes 

document.body.append(container); 
container.append(boxTopVertical, boxTopHorizontal01, boxTopHorizontal02, boxMiddleHorizontal01, boxMiddleHorizontal02, boxMiddleVertical, boxBottomVertical, boxBottomVertical, boxBottomHorizontal01, boxBottomHorizontal02); 


//ESTILOS PARA RESETEAR MARGENES Y DEJAR AL 100% ALTURAS 

document.documentElement.style.height = '100%'; 
document.body.style.minHeight = '100%'; 
document.documentElement.style.margin = '0'; 
document.documentElement.style.padding = '0'; 

//ESTILOS CONTAINER 

container.style.display = 'grid'; 
container.style.gridTemplateColumns = 'repeat(5, 1fr)'; 
container.style.gridTemplateRows = 'repeat(12, 1fr)'
container.style.backgroundColor = '#F8F8F8'; 
container.style.maxWidth = '80%'; 
container.style.minHeight = '100vh'; 
container.style.margin = '0 auto'; 

//ESTILOS CAJAS INTERIORES (COLORES DE FONDO)

boxTopVertical.style.backgroundColor = '#FF5959';  //color rojizo 
boxTopHorizontal01.style.backgroundColor = '#6199AF'; // color azulón grisáceo
boxTopHorizontal02.style.backgroundColor = '#F6B436'; // color mostaza

boxMiddleVertical.style.backgroundColor = '#6199AF';  //color azulón grisáceo
boxMiddleHorizontal01.style.backgroundColor = '#FF5959'; //color rojizo
boxMiddleHorizontal02.style.backgroundColor = '#F6B436'; //color mostaza

boxBottomVertical.style.backgroundColor = '#FF5959'; //color rojizo 
boxBottomHorizontal01.style.backgroundColor = '#6199AF'; //color azul grisáceo 
boxBottomHorizontal02.style.backgroundColor = '#F6B436'; //color mostaza


//ESTILOS CAJAS INTERIORES (grid area)

//Bloque superior 
boxTopVertical.style.gridArea = '1 / 1 / 5 / 3'; 
boxTopHorizontal01.style.gridArea = '1 / 3 / 3 / 6'; 
boxTopHorizontal02.style.gridArea = '3 / 3 / 5 / 6'; 

//Bloque intermedio 
boxMiddleVertical.style.gridArea = '5 / 4 / 9 / 6'; 
boxMiddleHorizontal01.style.gridArea = '5 / 1 / 7 / 4';
boxMiddleHorizontal02.style.gridArea = '7 / 1 / 9 / 4';

//Bloque inferior 
boxBottomVertical.style.gridArea = '9 / 1 / 13 / 3'; 
boxBottomHorizontal01.style.gridArea = '9 / 3 / 11 / 6'; 
boxBottomHorizontal02.style.gridArea = '11 / 3 / 13 / 6'; 


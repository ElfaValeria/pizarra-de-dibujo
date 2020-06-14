/* Declaracion de Variables: */
var cuadrito = document.getElementById("areaDeDibujo");
var papelParaDibujar = cuadrito.getContext("2d");

 /* Variables para fuardar las coordenadas dn X y Y de 
el mouse en todo momento: */ 
var posicionCursorX = 0;
var posicionCursorY = 0;

 /* Variable para entrar en modo dibujo: */
var dibujando = false;

/* Invocando Funciones: */

cuadrito.addEventListener("mousedown", empezarDibujo);

cuadrito.addEventListener("mousemove", dibujarEnMovimiento);

document.addEventListener("mouseup", dejarDeDibujar);


/* Declaracion de Funciones: */
function dibujarLinea(Color, xInicial, yInicial, xFinal, yFinal, lienzo)
{
   lienzo.beginPath();
   lienzo.strokeStyle = Color; 
   lienzo.lineJoin = 'round';
   lienzo.lineCap = 'round';
   lienzo.lineWidth = 6;
   lienzo.moveTo(xInicial, yInicial);
   lienzo.lineTo(xFinal, yFinal);
   lienzo.stroke();
}

function empezarDibujo(evento)
{
    // Entro en modo dibujo: 
    dibujando = true;
    /* Obtengo la posicion del mouse al momento de dar click: */
    posicionCursorX = evento.offsetX;
    posicionCursorY = evento.offsetY;
}

function dibujarEnMovimiento(evento)
{
    var colorcito = "green";
    /* obtengo posicion actual para ponerla como destino: */
    var xf = evento.offsetX;
    var yf = evento.offsetY;
    
    /* el if valida que estoy en modo dibujo para empezar 
    a dibujar en verdad: */
    if(dibujando)
    {
        dibujarLinea(colorcito, posicionCursorX , posicionCursorY , xf, yf, papelParaDibujar);
        /* guardo y actualizo a la ultima posicion del mouse, para continuar 
        desde ahi, mientras no suelte el mouse; asi sigo dibujando 
        continuamente mientras este evento se siga repitiendo
        y evito que mi posicion inicial siga siendo la del click: */
        posicionCursorX = xf;
        posicionCursorY = yf;
    }
console.log(evento);
}  

function dejarDeDibujar()
{
    /* salgo de modo dibujo: */
    dibujando = false;
    
}
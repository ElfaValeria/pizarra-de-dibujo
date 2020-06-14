/* Declaracion de Variables: */
var cuadrito = document.getElementById("areaDeDibujo");
var papelParaDibujar = cuadrito.getContext("2d");
var flechas = {
  UP: 38, 
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var x = 100;
var y = 100;

/* Invocando Funciones: */
console.log(flechas);

document.addEventListener("keydown", dibujarConTeclado);

dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papelParaDibujar);

/* Declaracion de Funciones: */
function dibujarLinea(Color, xInicial, yInicial, xFinal, yFinal, lienzo)
{
   lienzo.beginPath();
   lienzo.strokeStyle = Color; 
   lienzo.lineWidth = 3;
   lienzo.moveTo(xInicial, yInicial);
   lienzo.lineTo(xFinal, yFinal);
   lienzo.stroke();
}

function dibujarConTeclado(evento)
{
    var codigoDeTecla = evento.keyCode;
    var colorcito = "green";
    var movimiento = 1;

    switch (codigoDeTecla) {
        case flechas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papelParaDibujar);
            y = y - movimiento;
            break;
        case flechas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papelParaDibujar);
            y += movimiento;
            break;
        case flechas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papelParaDibujar);
            x -= movimiento;
            break;
        case flechas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papelParaDibujar);
            x += movimiento;
            break;
    
        default:
            console.log("otra tecla");
            break;
    }

}  
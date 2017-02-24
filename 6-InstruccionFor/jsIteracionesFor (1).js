var cont1 = 0;
var cont2 = 0;
var cont3 = 0;
var cont4 = 0;
var cont5 = 0;
var cont6 = 0;
var cont7 = 0;
var cont8 = 0;
var cont9 = 0;
var cont10 = 0;

function Mostrar()
{
	var nroRandom;
	for (cont = 0; cont<100000;cont++)
	{
		nroRandom = Math.floor(Math.random() * 10 + 1 );
		console.log(nroRandom);

		switch (nroRandom)
		{
			case 1:
				cont1 ++;
				break;
			case 2:
				cont2 ++;
				break;
			case 3:
				cont3 ++;
				break;
			case 4:
				cont4 ++;
				break;
			case 5:
				cont5 ++;
				break;
			case 6:
				cont6 ++;
				break;
			case 7:
				cont7 ++;
				break;
			case 8:
				cont8 ++;
				break;
			case 9:
				cont9 ++;
				break;
			case 10:
				cont10 ++;
				break;
		}
	}
	document.write("La cantidad de 1 es: " + cont1 + " Porcentaje: "+(cont1*100)/cont + "<br>");	
	document.write("La cantidad de 2 es: " + cont2 + " Porcentaje: "+(cont2*100)/cont + "<br>");
	document.write("La cantidad de 3 es: " + cont3 + " Porcentaje: "+(cont3*100)/cont + "<br>");
	document.write("La cantidad de 4 es: " + cont4 + " Porcentaje: "+(cont4*100)/cont + "<br>");
	document.write("La cantidad de 5 es: " + cont5 + " Porcentaje: "+(cont5*100)/cont + "<br>");
	document.write("La cantidad de 6 es: " + cont6 + " Porcentaje: "+(cont6*100)/cont + "<br>");
	document.write("La cantidad de 7 es: " + cont7 + " Porcentaje: "+(cont7*100)/cont + "<br>");
	document.write("La cantidad de 8 es: " + cont8 + " Porcentaje: "+(cont8*100)/cont + "<br>");
	document.write("La cantidad de 9 es: " + cont9 + " Porcentaje: "+(cont9*100)/cont + "<br>");
	document.write("La cantidad de 10 es:" + cont10 + " Porcentaje: "+(cont10*100)/cont + "<br>");
}
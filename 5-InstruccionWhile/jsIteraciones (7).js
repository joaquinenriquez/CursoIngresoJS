/*Enunciado:
Al presionar el botón pedir números hasta que el usuario 
quiera e informar la suma acumulada y el promedio.
*/

function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;

	while (respuesta!="0")
	{
			respuesta = prompt("Ingrese un nro o 0 para salir: ");
			respuesta = parseInt(respuesta);
			acumulador = acumulador + respuesta;
			contador ++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
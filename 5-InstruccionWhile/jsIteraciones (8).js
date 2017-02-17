/*
Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.
*/

function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;

	var respuesta='si';

	while (respuesta=="si")
	{
		numero = prompt("Ingrese un nro");
		numero = parseInt(numero);
		if (numero < 0)
		{
			negativo = negativo * numero;
		}
		else
		{
			positivo = positivo + numero;
		}
		respuesta = prompt("Ingrese si para continuar","si");
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
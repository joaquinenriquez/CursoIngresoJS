function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	while(numero<0 || numero>9)
	{
		numero = prompt("Numero incorrecto, por favor intente nuevamente");
	}

}//FIN DE LA FUNCIÓN
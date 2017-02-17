function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero = 0;
	var promedio = 0;

	while(contador<5)
	{
		if (isFinite(numero))
		{
			numero = prompt("Ingrese un nro");
			numero = parseInt(numero);
			acumulador = acumulador + numero;
			contador ++;	
		}
		else
		{
			alert("Nro invalido, vuelva a comenzar");
			break;
		}
		
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
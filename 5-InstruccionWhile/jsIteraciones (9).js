/*
Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo.
*/

function Mostrar()
{
	var contador=0;
	var numero=0;
	var nroMax;
	var nroMin;
	var edad;
	var nombre;
	var nombreMayor;
	var nombreMenor;
	var sexo;
	var nota;
	var notaMin;
	var cantDeAprobados;
	var cantDesaprobadosMasculinos;
	var cantDesaprobadosFemeninos;
	var promedioNotas;
	var acumuladorNotas;
	var acumuladorEdadFemenino
	var cantidadMujeresNotaPar;
	var yaSalioElDiego='naide';
	var nombreDiego;
	var sexoDiego;
	var edadDiego;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		nombre = prompt("Por favor ingrese nombre");
		
		//Ingresamos y validamos edad
		edad = prompt("Ingrese un numero");
		edad = parseInt(edad);
		
		while (edad>100 || edad<0)
		{
			edad = prompt("Error! Nro inválido. Por favor intente nuevamente");
			parseInt(edad);
		}


		//Ingresamos y validamos sexo
		sexo = prompt("Ingrese sexo f o m");
		while (sexo!='f' && sexo!='m')
		{
			sexo = prompt("Error! Ingrese sexo f o m");
		}

		if (sexo=='f')
			{
				acumuladorEdadFemenino = acumuladorEdadFemenino + edad;

				if (nota%2==0 && edad<18)
				{
					cantidadMujeresNotaPar++; //contamos la cantidad de mujeres menores de edad con nota par
				}
			}

		//Ingresamos y validamos nota
		nota = prompt("Ingrese nota");
		nota = parseInt(nota);
		while (nota>10 || nota<0)
		{
			nota = prompt("Error! Reinigre la nota.");
			nota = parseInt(nota);
		}

		acumuladorNotas = acumuladorNotas + nota //acumulador para el promedio

		if (nota==10 && yaSalioElDiego=='nadie')
		{
			nombreDiego = nombre; //guardamos el nombre del diego
			edadDiego = edad; // guardamos la edad del diego
			sexoDiego = sexo; //guardamos el sexo del diego
			yaSalioElDiego = "1"; //cambiamos la bandera
		}

		//Cantidad de muejeres menores de edad con nota par:

		if (nota>4)
		{
			cantDeAprobados++;
		}
		else
		{
			if sexo = 'm'
			{
				cantDesaprobadosMasculinos++;
			}
			if sexo = 'f'
			{
				cantDesaprobadosFemeninos++;
			}
		}
		
		contador++; 

		if (contador == 1) //verificamos si es la primera vuelta
		{
			nroMax = edad; //guardamos la edad maxima
			nroMin = edad; //guardamos la edad minima
			nombreMayor = nombre; //guardamos el nombre del mayor
			nombreMenor = nombre; //guardamos el nombre del menor
			notaMin = nota; //guardamos la nota minima
		}
		else
		{
			if (edad < nroMin)
			{
				nroMin = edad;
				nombreMenor = nombre;
			}
			if (edad > nroMax)
			{
				nroMax = edad;
				nombreMayor = nombre;
			}
		}
		respuesta = prompt("Para salir teclee No","0");		
		
		promedio = acumulador/contador //calculamos el promedio


	}
	document.getElementById('maximo') = nroMax;
	document.getElementById('minimo') = nroMin;
}//FIN DE LA FUNCIÓN
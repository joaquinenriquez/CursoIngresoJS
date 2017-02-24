/*Necesito saber el nombre del primer gato
que sea de una mujer mayor de 30 años y el gato no tenga mas de 5 años de edad
*/

function Mostrar()
{
	var tieneMascota;
	var cont;
	var contMascotas;
	var tipoMascota;
	var contNoMascotas;
	var edad;

	for(cont = 0;cont<5;cont++)
	{
		//ingresamos y validamos si tiene mascota
		tieneMascota = prompt("¿Tiene mascota?", "s");

		while (tieneMascota!= "s" && tieneMascota!= "n")
		{
			tieneMascota = prompt("¿Tiene mascota?", "s");			
		}

		//contamos los que tienen mascotas

		if (tieneMascota=="s")
		{
			contMascotas ++;
			tipoMascota = prompt("Que tipo de mascota? Perro o Gato");

			while (tipoMascota!="gato" && tipoMascota!="perro")
			{
				tipoMascota = prompt("No aceptamos otro tipo de mascota que no sea Perro o Gato. Intente de nuevo");
			}
		}
		else
		{
			edad = prompt("Ingrese la edad");
			edadMayor = edad;
			flag = 1;
			if (flag == 1 && edad>edadMayor)
			{
				edadMayor = edad;
			}
			contNoMascotas ++;
		}
	}
}
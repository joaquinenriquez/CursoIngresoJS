/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad 
(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function Mostrar()
{
//tomo la edad 
	var edad = document.getElementById('edad').value;
	edad = parseInt(edad);

	if (edad >=18)
	{
		alert("Mayor de edad");
	}
	else
	{
		if (edad < 13)
		{
			alert("Niño");
		}
		else
		{
			if (edad >=13 && edad <= 17)
			{
				alert("Adolescente");
			}
		}
	}
}//FIN DE LA FUNCIÓN
function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	// if (edad >= 18)
	// {
	// 	alert("La persona es mayor de edad, ya que tiene: " + edad + " años");
	// }
	// if (edad <=18) 
	// {
	// 	alert("La persona es menor de edad, ya que tiene: " + edad + " años");
	// }
	if (edad >=18)
	{
		alert("La persona es mayor de edad, ya que tiene: " + edad + " años");
	}
	else
	{
		alert("La persona es menor de edad, ya que tiene: " + edad + " años");
	}
		
}//FIN DE LA FUNCIÓN
function Mostrar()
{
//tomo la edad  
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	if (edad >= 18)
	{
		alert("La parsona es mayor de edad ya que tiene: " + edad + " años");
	}
}//FIN DE LA FUNCIÓN
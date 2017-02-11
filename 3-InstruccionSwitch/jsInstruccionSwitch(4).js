/*
Enunciado:
al seleccionar un mes informar. 
si tiene 28 días.
si tiene 30 días.
si tiene 31 días
*/

function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	switch (mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;
		case "Febrero":
			alert("Tiene 28 dias");
			break;
		default:
			alert("Tiene 31 dias");
	}
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN
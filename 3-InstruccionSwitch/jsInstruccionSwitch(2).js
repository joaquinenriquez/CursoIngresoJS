/*
Enunciado:
al seleccionar un mes informar. 
si estamos en Invierno: "Abrigate que hace frio." 
si aún no llego el Invierno: "Falta para el invierno." 
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	switch (mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Junio":
			alert("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Septiembre":
		case "Noviembre":
		case "Diciembre":
			alert ("Ya pasamos el frio, ahora el calor!!!");
	}
}//FIN DE LA FUNCIÓN
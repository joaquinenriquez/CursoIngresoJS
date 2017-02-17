function Mostrar()
{
	var sexo = prompt("ingrese f, m, u o");
	sexo = sexo.toUpperCase();
	while(sexo!="F" && sexo!="M" && sexo!="O")
	{
		console.log(sexo);
		var sexo = prompt("Valor invalido, por favor ingrese un valor válido");;
	}
	document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN
/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var nro1;
	var nro2;

	nro1 = parseInt(document.getElementById('numeroUno').value);
	nro2 = parseInt(document.getElementById('numeroDos').value);

	alert(nro1+nro2);
}


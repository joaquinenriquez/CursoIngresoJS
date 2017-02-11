/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */


function CalcularPrecio () 
{
	const precioUnidad = 35;
	var cantidad = document.getElementById('Cantidad');
	cantidad = parseInt(cantidad);
	var marca = document.getElementById('Marca');
	var precioConDescuento;
	var precioBruto;
	var precioFinal;
	var impuestos;

	precioBruto = precioUnidad * cantidad;

	if (cantidad > 6)
	{
		precioConDescuento = precioBruto * 0.5;
	}
	else
	{
		if (cantidad == 5)
		{
			switch (marca)
			{
				case "ArgentinaLuz":
					precioConDescuento = precioBruto * 0.6;
					break;
				default:
					precioConDescuento = precioBruto * 0.7;
					break;
			}
		else
		{
			if (cantidad == 4)
			{
				switch (marca)
				{
					case "ArgentinaLuz":
					case "FelipeLamparas":
						precioConDescuento = precioBruto * 0.75;
						break;
					default:
						precioConDescuento = precioBruto * 0.8;
				}
			}
		}
		else
		{
			if (cantidad == 3)
			{
				switch (marca)
				{
					case "ArgentinaLuz":
						precioConDescuento = precioBruto * 0.85;
						break;
					case "FelipeLamparas":
						precioConDescuento = precioBruto * 0.90;
						break;
					default:
						precioConDescuento = precioBruto * 0.95;
						break;
				}
			}
		}
 	}
 	if (precioConDescuento > 120)
 	{
 		impuestos = precioConDescuento * 0.1;
 		alert("Usted pago " + impuestos + " de IIBB");
 	}
}

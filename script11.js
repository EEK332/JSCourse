//Задание 1
//Перевести температуру, заданную в градусах по Цельсию, в градусы по Фаренгейту
var tempC = +prompt("Температура по Цельсию");
if(!isNaN(tempC))
{
	var tempF = (9/5) * tempC + 32;
	alert("Температура по Фаренгейту " + tempF.toFixed(2));
}
else
	alert("Введено не число!");

//Задание 1
//Написать функцию преобразования числа в объект

var number = +prompt("Введите число от 0 до 999");

function NumObj(num)
{
	if(num>999 || num<0)
	{
		console.log("Введено неверное число!");
	}
	else
	{
		numObj.hundreds = parseInt(num/100);
		numObj.tens = parseInt((num%100) / 10);
		numObj.units = (num%100) % 10;
	}
	return numObj;
}
var numObj={};
console.log(NumObj(number));
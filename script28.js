//Задание 8
//С помощью рекурсии организовать функцию возведения числа в степень.
function power(val, pow)
{
	if(pow==1)
	{
		return val;
	}
	else if(pow==0)
	{
		return 1;
	}
	return power(val*x,--pow);
}

var x = +prompt("Введите число:");
var y = +prompt("Введите степень:");
alert(x+"^"+y+" = "+power(x,y));
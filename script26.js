//Задание 6
//Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции.
//В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
function add(a,b)
{
	return a+b;
}

function sub(a,b)
{
	return a-b;
}

function mul(a,b)
{
	return a*b;
}

function div(a,b)
{
	return a/b;
}
function mathOperation(arg1, arg2, operation)
{
	switch(operation)
	{
		case '+':
			return add(arg1,arg2);
		case '-':
			return sub(arg1,arg2);
		case '*':
			return mul(arg1,arg2);
		case '/':
			return div(arg1,arg2);
		default:
			return "Ошибка!";
	}
}

var x = +prompt("Введите a:");
var y = +prompt("Введите b:");
var z = prompt("Введите действие (+ - * /):");
alert(x+z+y+" = "+mathOperation(x, y,z));

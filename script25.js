//Задание 5
//Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
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

var x = +prompt("Введите a:");
var y = +prompt("Введите b:");

alert(x+"+"+y+" = "+add(x,y)+"\n"+x+"-"+y+" = "+sub(x,y)+"\n"+x+"*"+y+" = "+mul(x,y)+"\n"+x+"/"+y+" = "+div(x,y));
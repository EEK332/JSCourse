//Задание 4
//Присвоить переменной а значение в промежутке [0..15]. Вывести числа от a до 15
//Реализация через switch
var a = prompt("Ведите число от 0 до 15");
var str="";
switch(a)
{
	case '0':
		str+='0 ';
	case '1':
		str+='1 ';
	case '2':
		str+='2 ';
	case '3':
		str+='3 ';
	case '4':
		str+='4 ';
	case '5':
		str+='5 ';
	case '6':
		str+='6 ';
	case '7':
		str+='7 ';
	case '8':
		str+='8 ';
	case '9':
		str+='9 ';
	case '10':
		str+='10 ';
	case '11':
		str+='11 ';
	case '12':
		str+='12 ';
	case '13':
		str+='13 ';
	case '14':
		str+='14 ';
	case '15':
		str+='15';
		break;
	default:
		str='Введено неверное значение!';
}
alert(str);
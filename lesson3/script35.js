//Задание 5
//Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов
var str;
for(var i=1;i<=20;i++)
{
	str="";
	for(var j=1;j<=i;j++)
	{
		str+="x";
	}
	console.log(str);
}
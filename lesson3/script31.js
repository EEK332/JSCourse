//Задание 1
//С помощью цикла while вывести все простые числа в промежутке от 0 до 100
var i = 2;
while(i<100)
{
	j = 2;
	while(j<=Math.round(i/2))
	{
		if(i%j==0)
		{
			break;
		}
		j++;

	}
	if(j>(i/2))
	{
		console.log(i);
	}
	i++;
}

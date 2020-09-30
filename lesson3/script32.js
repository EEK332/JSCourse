//Задание 2
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
var basket = [
{
	name: 'Товар1',
	price: 57.7
},

{
	name: 'Товар2',
	price: 160
},

{
	name: 'Товар3',
	price: 170.34
}
];

var sum = 0;
for(var good of basket)
{
	sum+=good.price;
	console.log(good);
}

console.log(sum.toFixed(2));
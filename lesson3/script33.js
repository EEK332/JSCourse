//Задание 3
//Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
var basket = [
{
	name: 'Товар1',
	price: 57.7,
	count: 1
},

{
	name: 'Товар2',
	price: 160,
	count: 5
},

{
	name: 'Товар3',
	price: 170.34,
	count: 2
}
];

function countBasketPrice(goodsBasket)
{
var sum = 0;
for(var good of goodsBasket)
{
	sum+=good.price*good.count;
}
return sum;
}

console.log(countBasketPrice(basket));
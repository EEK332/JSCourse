var numOfGoods = goods.length;
var basket = [];

function fillCatalog(){
	var item, element;
	for(var i=0;i<numOfGoods;i++)
	{
		item = document.createElement("div");
		item.className = "goodItem";
		document.querySelector(".goodsList").append(item);
		element = document.createElement("div");
		element.className = "imageItem";
		item.append(element);
		element = document.createElement("img");
		element.src = "images/"+goods[i].image +".jpg";
		element.alt = "Good";
		element.className = "goodImg";
		document.querySelectorAll(".imageItem")[i].append(element);
		element = document.createElement("h5");
		element.innerText = goods[i].name;
		item.append(element);
		element = document.createElement("p");
		element.innerText = goods[i].price + " руб.";
		element.className = "goodPrice";
		item.append(element);
		element = document.createElement("button");
		element.className = "buyButton";
		element.innerText = "В корзину";
		element.id = i;
		element.onclick = Buy;
		item.append(element);
	}
}

function Buy(e){
	if(basket.filter(item => item.name==goods[e.target.id].name).length>0)
	{
		var i=0;
		while(basket[i].name!=goods[e.target.id].name){ i++};
		basket[i].count++;
		increaseGoodCount(i);
	}
	else
	{
		var basketItem = {name: goods[e.target.id].name,
			price: goods[e.target.id].price,
			count: 1};
		basket.push(basketItem);
		addGoodToBasket();
	}
	totalPriceCalc();
}

function increaseGoodCount(id){
	var item;
	item = document.querySelectorAll(".basketItem");
	item[id].lastChild.innerText = basket[id].count*basket[id].price+" руб.";
	item[id].children[1].innerHTML = basket[id].price+" &#215; "+ basket[id].count + " шт.";
}

function addGoodToBasket(){
	var item, element, total;
	total = document.querySelector(".basketItemTotal");
	item = document.createElement("div");
	item.className = "basketItem";
	document.querySelector(".basket").insertBefore(item,total);
	element = document.createElement("p");
	element.className = "basketText";
	element.innerText = basket[basket.length-1].name;
	item.append(element);
	element = document.createElement("p");
	element.className = "basketText";
	element.innerHTML = basket[basket.length-1].price+" &#215; "+ basket[basket.length-1].count + " шт.";
	item.append(element);
	element = document.createElement("p");
	element.className = "basketText";
	element.innerText = " = ";
	item.append(element);
	element = document.createElement("p");
	element.className = "basketText basketPrice";
	element.innerText = (basket[basket.length-1].count*basket[basket.length-1].price) + " руб.";
	item.append(element);
}

function totalPriceCalc(){
	var totalPrice = 0, item, element;
	for(item of basket)
	{
		totalPrice+=item.price*item.count;
	}
	item = document.querySelector(".basketItemTotal");
	if(item)
	{
		item.children[1].innerText = totalPrice + " руб.";
	}
	else
	{
		item = document.createElement("div");
		item.className = "basketItemTotal";
		document.querySelector(".basket").append(item);
		element = document.createElement("p");
		element.innerText = "Итого";
		item.append(element);
		element = document.createElement("p");
		element.innerText = totalPrice + " руб.";
		item.append(element);
	}

}

fillCatalog();
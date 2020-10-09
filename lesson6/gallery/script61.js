var numOfImages = 3;

function fillPreview(){
	var image;
	for(var i=0;i<numOfImages;i++){
		image = document.createElement("img");
		image.src = "small/"+(i+1)+".jpg";
		image.alt = "Small image";
		image.id = (i+1);
		image.onclick=increaseImages;
		document.querySelector(".preview").append(image);
	}
}

function increaseImages(e)
{
	var id = e.target.id;
	var image = document.querySelector(".bigImg");
	if(!image)
	{
		image = document.createElement("img");
		image.alt = "Image";
		image.onerror = errorLoadImage;
		image.className = "bigImg";
		document.querySelector("body").append(image);
	}	
	image.src = "big/"+id+".jpg";
}


function errorLoadImage()
{
	var image = document.querySelector(".bigImg");
	if(image)
	{
		image.remove();
	}
	alert("Изображение не найдено!");
}

fillPreview();
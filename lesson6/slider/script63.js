var numOfImages = 3;
var count = 1;

document.querySelectorAll("span")[0].onclick = rotImage;
document.querySelectorAll("span")[1].onclick = rotImage;

function rotImage(e)
{
	if(e.target.innerText=="‹")
	{
		count--;
		if(count<1)
		{
			count = numOfImages;
		}
	}
	else{
		count++;
		if(count>numOfImages)
		{
			count = 1;
		}
	}
	document.querySelector(".slider").style.backgroundImage = "url(\"images/"+count+".jpg\")";
}
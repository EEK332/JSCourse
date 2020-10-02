var mainDiv = document.createElement("div");
mainDiv.className = "chessboard";
document.querySelector("body").append(mainDiv);
var i,j;
var masW = ["&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;"];
var masB = ["&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"];
var element;
for(i=0;i<10;i++)
{
	for(j=0;j<10;j++)
	{
		if(!(i==0 && (j==0 || j==9)) && !(i==9 && (j==0 || j==9)))
		{
			if(i>0 && i<9 && j>0 && j<9)
			{
				element = document.createElement("div");
				element.className = "cell";
				if((i%2!=0 && j%2 != 0) || (i%2==0 && j%2==0))
				{
					element.className += " white";
				}
				else
				{
					element.className += " black";
				}
			}
			else 
			{
				element = document.createElement("p");
				element.className = "title";
				if(j==1)
				{
					element.className += " second";
				}
				if(j==0 && i==1)
				{
					element.className += " first";
				}
			}
			if(i==0 || (i<7 && j==9) || ((i==7 || i==8) && j!=0))
			{
				element.className += " rot";
			}
			document.querySelector(".chessboard").append(element);
		}
	}
}
var cells = document.querySelectorAll(".cell");
var title = document.querySelectorAll(".title");
for(i=0,j=8;i<8;i++,j+=2)
{
	title[i].innerHTML = "&#"+(97+i)+";";
	title[i+24].innerHTML = "&#"+(97+i)+";";
	title[j].innerText = 8-i;
	title[j+1].innerText = 8-i;
	cells[i].innerHTML = masW[i];
	cells[i+8].innerHTML = "&#9823;";
	cells[i+8*6].innerHTML = "&#9817;";
	cells[i+8*7].innerHTML = masB[i];
}

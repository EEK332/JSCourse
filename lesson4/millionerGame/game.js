var prize = 0; //выигрыш пользователя
var gameOver=false; //индикатор окончания игры
var i=0, userAns,ansFF,ffActive=false;
var helps={ //использованные подсказки
	fifty: false,
	friend: false
}

do{
	OutputQuestion(i); //вывод вопроса
	switch(userAns)
	{
		case "1": //подсказка 50/50
			helps.fifty = true;
			fiftyFiftyHelp(i);
			console.log(ansFF);
			ffActive = true;
			break;
		case "2": //подсказка помощь друга
			helps.friend = true;
			askFriendHelp(i);
			break;
		case "-1": //выход
			if(i!=0) //если пользователь ответил хотя бы на 1 вопрос
			{
				prize = cash[i-1];
			}
			gameOver = true;
			break;
		default: //пользователь дал ответ
			ffActive = false;
			if(isRight(i,userAns)) //проверка на правильность
			{
				alert("Ваш ответ правильный!\nВы выиграли "+cash[i]);
				if(i==4 || i==10) //несгораемые суммы 1000 и 64000
				{
					prize = cash[i];
				}
				i++;
				if(i==15) //если последний вопрос игра окончена
				{
					prize = cash[i-1];
					gameOver=true;
				}
			}
			else
			{
				alert("Ваш ответ неправильный!"); //неправильный ответ
				gameOver = true;
			}
	}

}while(!gameOver);
alert("Спасибо за игру!\nВыигрыш составил "+prize);

function OutputQuestion(j)
{

	do{
		if(!ffActive) //если не активна подсказка 50/50 выводим 4 варианта ответа
		{
			userAns = prompt("Вопрос "+(j+1)+"\n"+questions[j].quesText+"\nA: "+questions[j].answers[0]+"\nB: "+questions[j].answers[1]+"\nC: "+questions[j].answers[2]+"\nD: "+questions[j].answers[3]+"\n-1: Завершить игру\n1 - Подсказка 50/50\n2 - Подсказка Помощь друга");
		}
		else if(questions[j].rightAns<ansFF) //иначе выводим 2 варианта ответа
		{
			userAns = prompt("Вопрос "+(j+1)+"\n"+questions[j].quesText+"\n"+ansLetters[questions[j].rightAns]+": "+questions[j].answers[questions[j].rightAns]+"\n"+ansLetters[ansFF]+": "+questions[j].answers[ansFF]+"\n-1: Завершить игру\n1 - Подсказка 50/50\n2 - Подсказка Помощь друга");
		}
		else
		{
			userAns = prompt("Вопрос "+(j+1)+"\n"+questions[j].quesText+"\n"+ansLetters[ansFF]+": "+questions[j].answers[ansFF]+"\n"+ansLetters[questions[j].rightAns]+": "+questions[j].answers[questions[j].rightAns]+"\n-1: Завершить игру\n1 - Подсказка 50/50\n2 - Подсказка Помощь друга");
		}
	}while(!isAnswer(userAns,j))

}

function isAnswer(event,j) { //проверка допустимости введенного пользователем ответа
	if(!isNaN(event) && parseInt(event)<3 && parseInt(event)>0)  //если выбрана одна из подсказок
	{
		if((event==1 && helps.fifty) || (event==2 && helps.friend))
		{
			alert("Вы уже использовали эту подсказку");
			return false;
		}
	}
    else if ((!Boolean(event) || ansLetters.indexOf(event.toUpperCase())==-1 || (ffActive && ansLetters.indexOf(event.toUpperCase())!=questions[j].rightAns && ansLetters.indexOf(event.toUpperCase())!=ansFF)) && event!=-1) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
	return true;
}

function isRight(j,event)
{
	if(ansLetters.indexOf(event.toUpperCase())==questions[j].rightAns)
	{
		return true;
	}
	return false;
}

function fiftyFiftyHelp(j) //подсказка 50/50 (альтернативный ответ генерируется случайным образом)
{
	while((ansFF = Math.round(Math.random()*3))==questions[j].rightAns);
}


function askFriendHelp(j) //подсказка помощь друга (считается, что друг подсказывает верно в 80% случаев)
{
	var probability = Math.random();
	if(probability<0.8) //если случайное число меньше 0.8 друг подсказывает верно
	{
		alert("Друг считает, что правильный ответ "+ ansLetters[questions[j].rightAns]);
	}
	else //иначе друг посказывает случайный ответ из неправильных
	{
		var ansF;
		while((ansF = Math.round(Math.random()*3))==questions[j].rightAns);
		alert("Друг считает, что правильный ответ "+ ansLetters[ansF]);
	}
}
var event, ok, step;
var answers = [];
var numOfSteps = 3; //Количество ходов в игре
var hist = false; //для вывода истории ответов
for(step=0;step<numOfSteps;step++) //цикл по шагам игры
{
    QuestionOut(step); //вывод вопроса
    if(event==-1) //выход из игры
    {
        break;
    }
}
if (step>0) //если был дан хотя бы один ответ
{
    event = +prompt("Спасибо за игру!\n1 - Посмотреть историю ответов");
    if(event==1) //просмотр истории
    {
        hist = true;
        do
        {
            var stepH = +prompt("Введите номер хода (от 1 до "+step+")");
        }while(!isAnswer(step,stepH));
        QuestionOut(stepH-1); //вывод вопроса и ответа заданного хода
    }
}
else
{
    alert('Спасибо за игру');
}

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

//вывод вопросов
function QuestionOut(s)
{
    switch(s)
    {
        case 0: //вывод первого вопроса
            Output(works.a0,works.a00,works.a1,works.a2);
            break;
        case 1: //вывод второго вопроса
            switch(answers[0])
            {
                case 1: //если на предыдущем шаге бул выбран 1 ответ
                    Output(works.b0,works.b00,works.b1,works.b2);
                    break;
                case 2: //если на пердыдущем шаге был выбран второй ответ
                    Output(works.c0,works.c00,works.c1,works.c2);
                    break;
            }
            break;
        case 2: //вывод третьего вопроса
            var ans = answers.slice(0,2).join('');
            switch(ans) //вывод вопроса в зависимости от комбинации предыдущих ответов (имеет смысл, если вопросы в разных ветках будут разные)
            {
                case '11':
                    Output(works.d0,works.d00,works.d1,works.d2);
                    break;
                case '12':
                    Output(works.d0,works.d00,works.d1,works.d2);
                    break;
                case '21':
                    Output(works.d0,works.d00,works.d1,works.d2);
                    break;
                case '22':
                    Output(works.d0,works.d00,works.d1,works.d2);
                    break;
            }
            break;
    }
}

//вывод вопроса или истории
function Output(numOfQ,ques,ans1,ans2)
{
    if(!hist) //если выводится вопрос
    {
        do {
            ok = false;
            event = +prompt(ques + ans1 + ans2 + '-1 - Выход из игры');
           
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(numOfQ, event);
                answers[step] = event;
            }
        } while (!ok);
    }
    else //если выводится история
    {
        alert(ques + ans1 + ans2 + "Ваш ответ: "+ answers[stepH-1]);
    }
}
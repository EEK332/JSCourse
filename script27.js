//Задание 7
//Сравнить null и 0. Объяснить результат
alert(null==0);//false При нестрогом равенстве null ни к чему не приводится, поэтому не равен 0
alert(null>0); //false При сравнении null приводится к 0, поэтому эквивалентно 0>0, что ложно
alert(null>=0); //true При сравнении null приводится к 0, поэтому эквивалентно 0>=0, что истинно
alert(null<0); //false При сравнении null приводится к 0, поэтому эквивалентно 0<0, что ложно
alert(null<=0); //true При сравнении null приводится к 0, поэтому эквивалентно 0<=0, что истинно
alert(null===0);//false Разные типы, поэтому false
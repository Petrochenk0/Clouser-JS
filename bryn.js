//Тема : замыкания
function returnFunction(){
    let number1 = 1;// помогает связать данные с функцие чстобы
    let number2 = 2;// не воздействовать с глобальными переменными
    // чтобы избежать ошибок

    return function(){
        console.log(number1,number2); 
    }
}
returnFunction()();

function returnFunctionDicrement(){
    let dicrementValue = 1;
    let incrementValue = 2;

    return function(){
        ++dicrementValue;//Позволяет взаимодействовать с переменными 
        --incrementValue;// замыкание
        console.log(dicrementValue);
        console.info(incrementValue);
        
    }
}
let valueFunc = returnFunctionDicrement();// создатся сво собственное окружение с одного источника

console.log("information for razdelation")

valueFunc();//вызваем переменную-функцию для теста
valueFunc();//вызваем переменную-функцию для теста
valueFunc();//вызваем переменную-функцию для теста
valueFunc();//вызваем переменную-функцию для теста

let valueFuncSecond = returnFunctionDicrement();// создатся сво собственное окружение с одного источника

console.log("information for razdelation");

valueFunc();//вызваем переменную-функцию для теста
valueFunc();//вызваем переменную-функцию для теста
valueFunc();//вызваем переменную-функцию для теста
valueFunc();//вызваем переменную-функцию для теста
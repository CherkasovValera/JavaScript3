"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/
function maxNambers(num1, num2, num3) {
    console.log(`"Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${Math.max(num1, num2, num3)}"`);
    return;
}
const inputNum1 = Number(prompt("Введите число №1"));
const inputNum2 = Number(prompt("Введите число №2"));
const inputNum3 = Number(prompt("Введите число №3"));
maxNambers(inputNum1, inputNum2, inputNum3);

"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/
function sumNambers(num1, num2) {
    console.log("Сумма")  
    console.log(num1 + num2);
  return;
}
function subNambers(num1, num2) {
  if (num1 >= num2) {
    console.log("Разница")
    console.log(num1 - num2);
    return;
  } else {
    console.log("Разница")
    console.log(num2 - num1);
    return;
  }
}
function multNambers(num1, num2) {
    console.log("Произведение")
    console.log(num1 * num2);
    return;
}
function divNambers(num1, num2) {
    console.log("Частное")
    console.log(num1 / num2);
    return;
}
const inputNum1 = Number(prompt("Введите число №1"));
const inputNum2 = Number(prompt("Введите число №2"));
sumNambers(inputNum1, inputNum2);
subNambers(inputNum1, inputNum2);
multNambers(inputNum1, inputNum2);
divNambers(inputNum1, inputNum2);

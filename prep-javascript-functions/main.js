function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('Hours to Minutes: ', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}

var greeting = getGreeting('World');
console.log('Greeting: ', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var result1 = addAndMultiplyBy5(10, 5);
console.log('Add and Multiply result: ', result1);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var result2 = multiplyAndDivideBy5(35, 10);
console.log('Multiply and Divide result: ', result2);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTwoNumbers(22, 7);
console.log('Subtract Two Numbers: ', subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circle = getCircleCircumference(5);
console.log('Circumference: ', circle);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var name = getFullName('Juan', 'Ramirez');
console.log(name);

function cube(number) {
  return Math.pow(number, 3);
}

var cubeNumber = cube(5);
console.log(cubeNumber);

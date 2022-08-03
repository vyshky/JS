let str = prompt("Введите математическое выражение");
console.log(str);

let operatorA = parseInt(str);
let reverseOperatorA = str.slice(+operatorA.toString().length + 1);
let operatorB = parseInt(reverseOperatorA);

let lengthA = operatorA.toString().length;
let lengthB = operatorB.toString().length;

let operation = str[lengthA];

if (str.length == lengthA + lengthB + 1) {
  console.log("Операция " + operation);
  switch (operation) {
    case "+":
      print(+operatorA + operatorB);
      break;
    case "-":
      print(+operatorA - operatorB);
      break;
    case "*":
      print(+operatorA * operatorB);
      break;
    case "/":
      print(+operatorA / operatorB);
      break;
  }
}

function print(_expression) {
  console.log("Ответ " + _expression);
}

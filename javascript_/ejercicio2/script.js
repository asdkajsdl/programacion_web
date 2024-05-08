function number1() {
  const number1 = document.getElementById("num1").value;
  return parseInt(number1);
}

function number2() {
  const number2 = document.getElementById("num1").value;
  return parseInt(number2);
}

function calcular() {
  console.log(number1() + number2());
  const result = number1() + number2();
  document.getElementById("resultado").textContent = result;
}

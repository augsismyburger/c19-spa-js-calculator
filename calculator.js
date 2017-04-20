/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.

  Create a function that adds two numbers
  passed in as arguments. Return the sum.

  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.

  Create a function that divides two numbers
  passed in as arguments. Return the quotient.

  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
num1 = document.getElementById("input1");
num2 = document.getElementById("input2");
add = document.getElementById("add");
subtract = document.getElementById("subtract");
multiply = document.getElementById("multiply");
divide = document.getElementById("divide");
output = document.getElementById("output");
clear = document.getElementById("clear");
// CLEAR
clear.addEventListener("click", function() {
  output.innerHTML = "";
  num1.value = "";
  num2.value = "";
});
// ADD
add.addEventListener("click", function() {
  var sum = parseInt(num1.value) + parseInt(num2.value);
  output.innerHTML = `<h1>${sum}</h1><br>`;
});
// SUBTRACT
subtract.addEventListener("click", function() {
  var remainder = parseInt(num1.value) - parseInt(num2.value);
  output.innerHTML = `<h1>${remainder}</h1><br>`;
});
// MULTIPLY
multiply.addEventListener("click", function() {
  var product = parseInt(num1.value) * parseInt(num2.value);
  output.innerHTML = `<h1>${product}</h1><br>`;
});
// DIVIDE
divide.addEventListener("click", function() {
  var quotient = parseInt(num1.value) / parseInt(num2.value);
  output.innerHTML = `<h1>${quotient}</h1><br>`;
});

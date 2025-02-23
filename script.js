function addNumber(a, b){
    return a + 5;
}

var number1 = parseFloat(prompt("Enter your 1st number here: "));
var number2 = parseFloat(prompt("Enter the 2nd number here:"));

var sumofnumber = addNumber(number1, number2);

alert("The sum of " + number1 + " and " + number2 + " is " + sumofnumber);
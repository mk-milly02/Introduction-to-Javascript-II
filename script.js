var operation = prompt("Please enter the operation sign i.e (+, -, *, /): ");

var num1 = parseInt(prompt("Please enter the first number: "));

var num2 = parseInt(prompt("Please enter the second number: " + "\n" + num1 + " " + operation));

if (num1 != null && num2 != null) {
    switch (operation) {
        case "+":
            alert("Result: \n" + num1 + " + " + num2 + " = " + (num1 + num2) );
            break;
        case "-":
            alert("Result: \n" + num1 + " - " + num2 + " = " + (num1 - num2) );
            break;
        case "*":
            alert("Result: \n" + num1 + " * " + num2 + " = " + (num1 * num2) );
            break;
        case "/":
            alert("Result: \n" + num1 + " / " + num2 + " = " + (num1 / num2) );
            break;
        default:
            alert("Incorrect input");
            break;
    }
}
else
{
    alert("An error occured");
}
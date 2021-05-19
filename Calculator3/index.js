let error = 'Error! Enter the numbers';

let addition = () => {
let firstNumber = document.getElementById("firstnumber").value;
let secondNumber = document.getElementById("secondnumber").value;
let n1 = parseFloat(firstNumber);
    let n2 = parseFloat(secondNumber);
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        document.getElementById('result').value = error;
        return;
    }
    let sum = +n1 + +n2;
    document.getElementById('result').value = sum;
    document.getElementById('firstnumber').value = "";
    document.getElementById('secondnumber').value = "";
}

let subtraction = () => {
    let firstNumber = document.getElementById("firstnumber").value;
    let secondNumber = document.getElementById("secondnumber").value;
    let n1 = parseFloat(firstNumber);
    let n2 = parseFloat(secondNumber);
        if (Number.isNaN(n1) || Number.isNaN(n2)) {
            document.getElementById('result').value = error;
            return;
        }
    let sub = n1 - n2;
    document.getElementById('result').value = sub;
    document.getElementById('firstnumber').value = "";
    document.getElementById('secondnumber').value = "";
    }

let multiplication = () => {
    let firstNumber = document.getElementById("firstnumber").value;
    let secondNumber = document.getElementById("secondnumber").value;
    let n1 = parseFloat(firstNumber);
    let n2 = parseFloat(secondNumber);
        if (Number.isNaN(n1) || Number.isNaN(n2)) {
            document.getElementById('result').value = error;
            return;
        }
    let mul = n1 * n2;
    document.getElementById('result').value = mul;
    document.getElementById('firstnumber').value = "";
    document.getElementById('secondnumber').value = "";
    }

let division = () => {
    let firstNumber = document.getElementById("firstnumber").value;
    let secondNumber = document.getElementById("secondnumber").value;
    let n1 = parseFloat(firstNumber);
    let n2 = parseFloat(secondNumber);
        if (Number.isNaN(n1) || Number.isNaN(n2)) {
            document.getElementById('result').value = error;
            return;
        }
        if (n2 == 0) {
            document.getElementById('result').value = "На ноль делить нельзя!";
            return;
        }
    let div = n1 / n2;
    document.getElementById('result').value = div;
    document.getElementById('firstnumber').value = "";
    document.getElementById('secondnumber').value = "";
    }
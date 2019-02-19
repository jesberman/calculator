var sum;
var calculation;

function myFunction() {
    var a = document.getElementById("number-1").value;
    var b = document.getElementById("number-2").value;
    var c = document.getElementById("operator").value;

    a = Number(a);
    b = Number(b);

    if (c === "+") {
        sum = a + b;
        alert(sum);
    }
    if (c === "-") {
        sum = a - b;
        alert(sum);
    }
     if (c === "/") {
        sum = a / b;
        alert(sum);
    } 
    if (c === "*") {
        sum = a * b;
        alert(sum);
    }
}

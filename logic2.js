var sum;
var calculation;
var sign;

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

function pressPlus() {
    var a = document.getElementById("number-1").value;
    var b = document.getElementById("number-2").value;

    a = Number(a);
    b = Number(b);

    document.getElementById("view-pane").innerHTML = a+b;
}

function pressMinus() {
    var a = document.getElementById("number-1").value;
    var b = document.getElementById("number-2").value;

    a = Number(a);
    b = Number(b);

    document.getElementById("view-pane").innerHTML = a-b;
}

function pressTimes() {
    var a = document.getElementById("number-1").value;
    var b = document.getElementById("number-2").value;

    a = Number(a);
    b = Number(b);

    document.getElementById("view-pane").innerHTML = a*b;
}


function pressDivide() {
    var a = document.getElementById("number-1").value;
    var b = document.getElementById("number-2").value;

    a = Number(a);
    b = Number(b);

    document.getElementById("view-pane").innerHTML = a/b;
}

var sum;
var calculation;
var sign;


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

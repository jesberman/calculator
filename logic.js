var answer;

var x;

function calculate (a,b,c) {
    if (c==="+") {
        console.log(a+b);
         answer=(a+b);
    }

    if(c==="-") {
        console.log(a-b);
         answer=(a-b);
    }

    if(c==="*") {
        console.log(a*b);
         answer=(a*b);
    }

    if (c==="/") {
        console.log(a/b);
         answer=(a/b);
    }
}

calculate(101,22,"/");

console.log("Answer");
console.log(answer);

document.getElementById("field").innerHTML = "Answer: " + answer;



function myFunction() {
    // var x = document.getElementById("myText").value;
    var x = document.getElementById("input-1").value;
    // document.getElementById("demo").innerHTML = x;
    alert(x);
    console.log("X");
    console.log(x);
  }
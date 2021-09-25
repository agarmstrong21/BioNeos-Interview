function submitButton(){
    var nameValue = document.getElementById("FactorMe").value;
    var factorial = factorialOf(nameValue)
    alert("yay for pressing the button!\n" + nameValue + "\n" + factorial)
}

function factorialOf(x){
    var out = 1;
    for(let i = 1; i <= x; i++){
        out *= i;
    }
    return out;
}
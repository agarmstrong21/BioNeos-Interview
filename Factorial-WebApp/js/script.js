function toFactorial(){
    var nameValue = document.getElementById("FactorMe").value;
    var factorial = factorialOf(nameValue)
    document.getElementById('UnfactorMe').value=factorial
}

function toUnfactorial(){
    var nameValue = document.getElementById("UnfactorMe").value;
    var unfactorial = unfactorialOf(nameValue)
    document.getElementById('FactorMe').value=unfactorial
}

function factorialOf(x){
    var out = 1;
    for(let i = 1; i <= x; i++){
        out *= i;
    }
    return out;
}

function ifEnter(event){
    if(event.keyCode == 13){
        submitButton();
    }
    
}

function unfactorialOf(x){
    var i = 1;
    var temp = x;
    while(x > 1 && i < temp){
        x /= i;
        i++;
    }
    if(x == 1){
        return i-1;
    }
    return 0;
}
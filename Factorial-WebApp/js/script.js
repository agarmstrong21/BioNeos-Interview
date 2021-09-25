function toFactorial(){
    var nameValue = document.getElementById("FactorMe").value;
    var factorial = factorialOf(nameValue)
    document.getElementById('UnfactorMe').value=factorial
}


/**
 * 
 */
function toUnfactorial(){
    var nameValue = document.getElementById("UnfactorMe").value;
    var unfactorial = unfactorialOf(nameValue)
    document.getElementById('FactorMe').value=unfactorial
}
/**
 * Function that calculates the factorial of the inputted number. To my knowledge, JS does not have a max, but will cap out at infinity. 
 * @param {*} x 
 * @returns 
 */
function factorialOf(x){
    var out = 1;
    for(let i = 1; i <= x; i++){
        out *= i;
    }
    return out;
}

/**
 * Function that calculates the reverse factorial of the inputted number. When x hits 1, we can assume it is factorialed number
 * @param {*} x 
 * @returns 
 */
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
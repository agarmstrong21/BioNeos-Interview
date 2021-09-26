/**************************************
 * 
 * File Name: script.js
 * Date: 9/25/2021
 * Description: This is the javascript backend for index.html. This file dynamically changes the page when user inputs anything within the form.   
 * 
 **************************************/

/**
 * Function that is called once the FactorMe form keyup event happens. This grabs the data from the form and calls factorialOf
 */
function toFactorial(){
    var nameValue = document.getElementById("FactorMe").value;
    var factorial = factorialOf(nameValue)
    document.getElementById('UnfactorMe').value=factorial
}

/**
 * Function that is called when the UnfactorMe form keyup event happens. This grabs the data from the form and calls factorialRootOf
 */
function toFactorialRoot(){
    var nameValue = document.getElementById("UnfactorMe").value;
    var unfactorial = factorialRootOf(nameValue)
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
function factorialRootOf(x){
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
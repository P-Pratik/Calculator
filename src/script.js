let a = 0;
let b = 0;

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operate(a,b,operator){
    switch (operator) {
        case '+':
            return add(a,b);
            break;
        
        case '-':
            return subtract(a,b);

        case '*':
            return multiply(a,b);
        
        case '/':
            return divide(a,b);

        default:
            console.log(`Error`)
            break;
    }
}

function getfirstValue(){
    
}

function calculate(){
    a = getfirstValue()

} 
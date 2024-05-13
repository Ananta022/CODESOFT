const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}
function calculatePercentage() {
    try {
        let expression = display.value;
        
        if (expression.includes('%')) {
            let parts = expression.split('%');
            let number = parseFloat(parts[0]);
            let percentage = parseFloat(parts[1]);

            let result = number - (number * (percentage / 100));

            display.value = result;
        } else {
            display.value = eval(expression);
        }
    } catch (error) {
        display.value = 'Error';
    }
}
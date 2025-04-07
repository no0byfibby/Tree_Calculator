//Calculator Functionality
const display = document.getElementById("display");

function appendToDisplay(user) {
    display.value += user;
}

function clearDisplay() {
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error!";
        setTimeout(() => {display.value = "Resetting...";}, 1000);
        setTimeout(clearDisplay, 3000);
    }
}

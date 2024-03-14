
function appendToDisplay(value){
    document.getElementById("display").value += value;
}
function clearDisplay(value){
    document.getElementById("display").value = "";
}
function backspace(){
    const display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}
function calculate(){
    const display = document.getElementById("display");
    display.value = replace(display.value);
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
function replace(value){
    var index;
    var char;
    if(value.includes("√")){
       value = value.replace("√","Math.sqrt");
    }
    if(value.includes("x")){
        value = value.replace("x","*");
    }
    if(value.includes("÷")){
        value = value.replace("÷","/");
    }
    if(value.includes("^")){
        index = value.indexOf("^");
        index = index - 1;
        char = value.charAt(index);
        value = value.replace(`${char}`+"^(",`Math.pow(`+`${char}`+",")
    }
    return value;
}

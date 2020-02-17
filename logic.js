function calculate() {
    document.getElementById("errorMSG").innerHTML = ""; //clear error message
    document.getElementById("totalInput").style.borderColor = "blue"; //clear error indicators
    document.getElementById("rateInput").style.borderColor = "blue";
    
    //parseFloat converts the strings to floats
    let totalAmount = parseFloat(document.getElementById("totalInput").value);
    let rateAmount = parseFloat(document.getElementById("rateInput").value);
    
    //error check the inputs
    if(isNaN(totalAmount)) {
        document.getElementById("errorMSG").innerHTML = "Enter some valid inputs, ya dingus."
        document.getElementById("totalInput").style.borderColor = "red";
    }
    if(isNaN(rateAmount)) { //if rate input is not a valid input, set it to 0.0
        rateAmount = 0.0;
        document.getElementById("rateInput").style.borderColor = "red";
    }

    let tipAmount = parseFloat(totalAmount) * (parseFloat(rateAmount) * 0.01);
    let taxAmount = parseFloat(totalAmount) * 0.055;
    let grandTotalAmount = parseFloat(totalAmount) + parseFloat(tipAmount) + parseFloat(taxAmount);
    
    //toFixed() rounds the values to the ()th decimal
    if(isNaN(tipAmount)) {
        document.getElementById("tipInfo").innerHTML = "$0.00";
    }
    else {
        document.getElementById("tipInfo").innerHTML = "$" + tipAmount.toFixed(2);
    }
    
    if(isNaN(taxAmount)) {
        document.getElementById("taxInfo").innerHTML = "$0.00";
    }
    else {
        document.getElementById("taxInfo").innerHTML = "$" + taxAmount.toFixed(2);
    }
    
    if(isNaN(grandTotalAmount)) {
        document.getElementById("grandTotalInfo").innerHTML = "$0.00";
    }
    else {
        document.getElementById("grandTotalInfo").innerHTML = "$" + grandTotalAmount.toFixed(2);
    }
}

let toggle = 0;

function toggleDarkMode() {
    const darkSheet = document.getElementById("darkModeStyleSheet");
    toggle++;
    
    if(toggle % 2 == 0) {
        darkSheet.disabled = false;
        document.getElementById("darkModeBTN").innerHTML = "Light Mode"
    }
    else {
        darkSheet.disabled = true;
        document.getElementById("darkModeBTN").innerHTML = "Dark Mode"
    }
    
}
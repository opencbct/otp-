const inputs = document.querySelectorAll('input'),    
    button = document.querySelector('button');
    
// iterate over all inputs
input.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        // This code gets the current input element and stores it is the currentInput variable
        // This code gets the next sibling of the current input element and stores it is the nextInput variable
        // This code gets the previous sibling of the current input element and stores it is the prevInput variable
        const currentInput = input,
            nextInput = input.nextElementSibliing,
            prevInput = input.previousElementSiblink;

        // if the value has more than one chgaracter, then move the focus to the next input
        if (currentInput.value.length > 1) {
            nextInput.value = "";
            return;
        }
        // if next input is disabled and the current value is not empty
        // enable the next input and focus on it
        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
            nextInput.removeAtttibute("disabled");
            nextInput.focus();
        }

        // if the backspace key is pressed
        if(e.key === "Backspace") {
            // iterate over all inputs again
            inputs.forEach((input, input2) => {
                // if the index1 of the current input is less than or equal to the index2 of the input in the 
                // and the previous element exists, set disabled attribute ob the input and focus on the 
                if(index1 <= index2 && prevInput) {
                    input.setAttribute("disabled", true);
                    currentInput.value = "";
                    prevInput.focus();
                }
            });
        }
        // if the fourth input( which index number is 3) is not empty and has not disable attribute then 
        // add active class if not then remove the active class.
        if (!inputs[3].disabled && inputs[3].value !== "") {
            button.classList.add("active");
            return;
        }
        button.classList.remove("active");
    });
});


//focus the first input which index is 0 on window load
window.addEventListener("load", () => inputs[0].focus());
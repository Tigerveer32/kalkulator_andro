document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "AC") {
                currentInput = "";
                display.value = "";
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                    display.value = currentInput;
                } catch (error) {
                    display.value = "Error";
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
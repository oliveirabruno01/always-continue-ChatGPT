// content.js
const continueButtonSelector = "main form div[data-projection-id] > button"

// Function to find and click the "continue" button
function clickContinueButton() {
    const continueButton = document.querySelector(continueButtonSelector);
    if (continueButton) {
        continueButton.click();
    }
}

// Function to continuously check for the "continue" button
function checkForContinueButton() {
    clickContinueButton();
    setTimeout(checkForContinueButton, 1000); // Check every 1 second
}

// Start checking for the "continue" button when the page finishes loading
window.addEventListener("load", checkForContinueButton);

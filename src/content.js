// content.js

const continueButtonSelector = "main div.absolute.bottom-full.left-0.right-0.z-20 > div > div > div > div > button";
const closeButtonSelector = '[data-testid="close-button"]';

function clickContinueButton() {
    const continueButton = document.querySelector(continueButtonSelector);
    if (continueButton) {
        continueButton.click();
    }
}

function clickCloseButton() {
    const closeButton = document.querySelector(closeButtonSelector);
    if (closeButton && closeButton.offsetParent !== null) {
        closeButton.click();
    }
}

const observer = new MutationObserver(() => {
    clickCloseButton();
    clickContinueButton();
});

window.addEventListener("load", () => {
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
});

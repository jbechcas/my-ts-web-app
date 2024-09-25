"use strict";
function insertCard() {
    const element = document.getElementById("containt-cards");
    const inputElement = document.getElementById("input");
    if (element && inputElement) {
        // Get the input value
        const cardTitle = inputElement.value;
        // Insert the card with the input value
        element.innerHTML = `
        <ion-card color="primary">
            <ion-card-header>
                <ion-card-title>${cardTitle}</ion-card-title>
            </ion-card-header>
        </ion-card>`;
        // Optionally clear the input after insertion
        inputElement.value = '';
    }
}
// Get the button element outside the function
const myButton = document.getElementById("myButton");
myButton.addEventListener('click', insertCard);

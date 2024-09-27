"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function miPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}
function insertCard() {
    return __awaiter(this, void 0, void 0, function* () {
        yield miPromesa();
        const response = yield fetch("https://picsum.photos/200/300");
        const urlImg = response.url;
        const element = document.getElementById("containt-cards");
        const inputElement = document.getElementById("input");
        const cardTitle = inputElement.value;
        if (element && cardTitle != "") {
            // Get the input value
            // Insert the card with the input value
            element.innerHTML += `
        <ion-card color="primary">
            <ion-card-header>
            <ion-card-title>${cardTitle}</ion-card-title>
            </ion-card-header>
            <ion-img
                    src="${urlImg}"
                    alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></ion-img>
        </ion-card>`;
            // Optionally clear the input after insertion
            inputElement.value = '';
        }
    });
}
// Get the button element outside the function
const myButton = document.getElementById("myButton");
myButton.addEventListener('click', insertCard);

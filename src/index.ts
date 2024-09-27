function miPromesa(): Promise<void>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },2000)
    })
}


async function insertCard() {
    await miPromesa();
    const response = await fetch("https://picsum.photos/200/300")
    const urlImg = response.url
    const element = document.getElementById("containt-cards");
    const inputElement = document.getElementById("input") as HTMLInputElement;
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
}

// Get the button element outside the function
const myButton = document.getElementById("myButton") as HTMLButtonElement;
myButton.addEventListener('click', insertCard);

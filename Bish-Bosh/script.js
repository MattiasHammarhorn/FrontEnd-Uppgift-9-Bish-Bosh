const calculateButton = document.getElementById("calculateButton");
const inputField = document.getElementById("inputField");
const resultField = document.getElementById("resultField");

calculateButton.addEventListener('click', () => test());

function test() {
    let inputFieldValue = parseInt(inputField.value);
    let results = NewBishBosh(inputFieldValue);
    
    //todo add all elements into a list and prepend
    resultField.innerHTML = null;
    let tempField;
    for (let i = 0; i < results.length; i++)
    {
        tempField = document.createElement('p');
        tempField.innerText = results[i];
        resultField.appendChild(tempField);
    }
}

function NewBishBosh(inputFieldValue) {
    let results = [];
    let result;

    // Start array at 1 since we are looping a number rather than array
    for (let i = 1; i <= inputFieldValue; i++) {
        if (i % 3 === 0 && i % 4 === 0) {
            result = 'Bish-Bosh';
        } else if (i % 3 === 0) {
            result = 'Bish';
        } else if (i % 4 === 0) {
            result = 'Bosh';
        } else {
            result = i;
        }

        results.push(result);
    }

    return results;
}
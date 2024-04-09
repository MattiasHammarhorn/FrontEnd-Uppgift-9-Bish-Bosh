const calculateButton = document.querySelector('#calculateButton');
const lengthField = document.querySelector('#lengthField');
const outputList = document.querySelector('#outputList');

const bishField = document.querySelector('#bishField');
const boshField = document.querySelector('#boshField');

const bish = (i, value = bishField.value) => i % value === 0;
const bosh = (i, value  = boshField.value) => i % value === 0;

calculateButton.addEventListener('click', () => initializeBishBosh());

function initializeBishBosh() {
    let loopValue = parseInt(lengthField.value);
    let bishValue = parseInt(bishField.value);
    let boshValue = parseInt(boshField.value);
    
    // Print error message if value is negative or 0
    if (!Math.sign(loopValue) || loopValue <= 0) {
        PrintNegativeValuesErrorMessage();
    } else if (!Math.sign(bishValue) || bishValue <= 0) {
        PrintNegativeValuesErrorMessage();
    } else if (!Math.sign(boshValue) || boshValue <= 0) {
        PrintNegativeValuesErrorMessage();
    } else {
        let output = NewBishBosh(loopValue);
        PrintResults(output);
    }
}

function NewBishBosh(lengthValue) {
    let output = [];
    let result;

    for (let i = 1; i <= lengthValue; i++) {
        if (bish(i) && bosh(i)) {
            result = 'Bish-Bosh';
        } else if (bish(i)) {
            result = 'Bish';
        } else if (bosh(i)) {
            result = 'Bosh';
        } else {
            result = i;
        }

        output.push(result);
    }

    return output;
}

function PrintResults(output) {
    outputList.innerHTML = null;
    let tempField = '';

    for (let i = 0; i < output.length; i++)
    {
        tempField += `<li class="list-group-item">${output[i]}</li>`
    }
    outputList.innerHTML = tempField;
}

function PrintNegativeValuesErrorMessage() {
    outputList.innerHTML = '';
    outputList.innerHTML = "Negative values are not allowed";
}
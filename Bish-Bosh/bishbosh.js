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
    
    if (loopValue < 0 || bish < 0 || bosh < 0 ) {
        console.log("Negative values are not allowed");
        outputList.innerHTML = '';
    } else {
        let output = NewBishBosh(loopValue);
        PrintBishBosh(output);
    }

    // outputList.innerHTML = null;
    // let tempField;

    // for (let i = 0; i < output.length; i++)
    // {
    //     tempField += `<li class="list-group-item">${output[i]}</li>`
    // }
    // outputList.innerHTML = tempField;

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

function PrintBishBosh(output) {
    outputList.innerHTML = null;
    let tempField;

    for (let i = 0; i < output.length; i++)
    {
        tempField += `<li class="list-group-item">${output[i]}</li>`
    }
    outputList.innerHTML = tempField;
}
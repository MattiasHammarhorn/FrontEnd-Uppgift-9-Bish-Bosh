const calculateButton = document.querySelector('#calculateButton');
const lengthField = document.querySelector('#lengthField');
const outputList = document.querySelector('#outputList');

const bishField = document.querySelector('#bishField');
const boshField = document.querySelector('#boshField');

const bish = (i, value = bishField.value) => i % value === 0;
const bosh = (i, value  = boshField.value) => i % value === 0;

calculateButton.addEventListener('click', () => test());

function test() {
    let lengthValue = parseInt(lengthField.value);
    let output = NewBishBosh(lengthValue);
    
    //todo add all elements into a list and prepend
    outputList.innerHTML = null;
    let tempField;
    for (let i = 0; i < output.length; i++)
    {
        // tempField = document.createElement('p');
        // tempField.innerText = output[i];
        // outputList.appendChild(tempField);
        tempField += `<li class="list-group-item">${output[i]}</li>`
    }
    outputList.innerHTML = tempField;
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
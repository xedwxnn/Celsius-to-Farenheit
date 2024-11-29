const inputC = document.getElementById('inputC');
const inputF = document.getElementById('inputF');

function convertToFarenheit() {
    let inputC_Value = parseFloat(inputC.value);

    inputF.value = parseFloat((inputC_Value*1.8) + 32);
}

addEventListener('input', convertToFarenheit);
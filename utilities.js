function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId)
    const inputFieldValueStrintg = inputField.value
    const inputFieldValue = parseFloat(inputFieldValueStrintg)
    inputField.value = ''
    return inputFieldValue
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId)
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString)
    return value;
}

function setTextElementValueById(elementId, newValueId) {
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValueId;
}
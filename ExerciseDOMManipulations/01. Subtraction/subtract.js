function subtract() {
    const num1 = Number(document.querySelector("#firstNumber").value);
    const num2 = Number(document.querySelector("#secondNumber").value);
    const result = num2 - num1;

    const resultElement = document.querySelector('#result');
    resultElement.textContent = result;
}
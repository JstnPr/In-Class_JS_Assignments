{
console.log('assignment.js loaded');
}
{
    // Alert Message Function
    const alertButton = document.querySelector('#alert-button');
    const alertMessage = (message) => alert(message);
    //
    alertButton.addEventListener('click', () => alertMessage('This is an Alert Message! Hello, World!'));
}
{
    // Welcome Message Function
    const welcomeInput = document.querySelector('#welcome-input');
    const welcomeButton = document.querySelector('#welcome-button');
    const getWelcomeMessage = (name) => `Welcome, ${name}!`;
    //
    welcomeButton.addEventListener('click', () => welcomeInput.value ? console.log(getWelcomeMessage(welcomeInput.value)) : console.log('Please enter your name.'));
}
{
    // Division Function
    const divisionNum1 = document.querySelector('#division-num1');
    const divisionNum2 = document.querySelector('#division-num2');
    const divisionButton = document.querySelector('#division-button');
    const divide = (a, b) => b != 0 ? a / b : 'Cannot divide by zero, it will cause a black hole.';
    //
    divisionButton.addEventListener('click', () => console.log(divide(divisionNum1.value, divisionNum2.value)));
}
{
    // Multiplication Function
    const multNum1 = document.querySelector('#mult-num1');
    const multNum2 = document.querySelector('#mult-num2');
    const divisionButton = document.querySelector('#mult-button');
    const multiply = (a, b) => a * b;
    //
    divisionButton.addEventListener('click', () => console.log(multiply(multNum1.value, multNum2.value)));
}
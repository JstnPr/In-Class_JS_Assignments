const consolePanel = document.querySelector('#console');
const clearButton = document.querySelector('#clear-button');
const runLimit = document.querySelector('#run-limit');

function print(message) {
    consolePanel.innerText += `> ${message}\n`;
    consolePanel.scrollTop = consolePanel.scrollHeight;
}
clearButton.addEventListener('click', () => {
    consolePanel.innerText = '';
})

// Standard FizzBuzz
function fizzBuzz() {
    // Guard Clause for empty Run Limit
    if (!runLimit.value) return alert('Error: Run Limit cannot be empty!');

    let limit = parseInt(runLimit.value);
    for (let i = 1; i <= limit; i++) {
        if (i % 15 === 0) {
            print('FizzBuzz');
        } else if (i % 3 === 0) {
            print('Fizz');
        } else if (i % 5 === 0) {
            print('Buzz');
        }
        else print(i);
    }
}

// Ternary FizzBuzz
function ternFizzBuzz() {
    // Guard Clause for empty Run Limit
    if (!runLimit.value) return alert('Error: Run Limit cannot be empty!');

    let limit = parseInt(runLimit.value);
    for (let i = 1; i <= limit; i++) {
        print(
            i % 15 === 0 ? 'FizzBuzz' :
            i % 3 === 0 ? 'Fizz' :
            i % 5 === 0 ? 'Buzz' : i
        );
    }
}

// FizzBuzzJazzBazz
function fizzBuzzJazzBazz() {
    // Guard Clause for empty Run Limit
    if (!runLimit.value) return alert('Error: Run Limit cannot be empty!');

    let limit = parseInt(runLimit.value);
    for (let i = 1; i <= limit; i++) {
        let output = ''; // Concatenation on match
        i % 3 === 0 ? output += 'Fizz' : null;
        i % 5 === 0 ? output += 'Buzz' : null;
        i % 7 === 0 ? output += 'Jazz' : null;
        i % 11 === 0 ? output += 'Bazz' : null;
        print(output || i);
    }
}

// FizzBuzz without Modulo (%)
function noModuloFizzBuzz() {
    // Guard Clause for empty Run Limit
    if (!runLimit.value) return alert('Error: Run Limit cannot be empty!');

    let limit = parseInt(runLimit.value);
    let fizzCount = 0;
    let buzzCount = 0;

    for (let i = 1; i <= limit; i++) {
        fizzCount++;
        buzzCount++;

        let output = ''; 
        fizzCount === 3 ? (output += 'Fizz', fizzCount = 0) : null;
        buzzCount === 5 ? (output += 'Buzz', buzzCount = 0) : null;
        // We count up instead of measuring divisibility
        // Fizzing and Buzzing on every multiple

        print(output || i);
    }
}
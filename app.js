/*-------------------------------- Constants --------------------------------*/
//-------------------------------- Variables --------------------------------*/

let currentNumber = '';                         //starting with an empty string
let previousNumber = '';
let operation = '';                           // null is used for intialization, allows the user to choose the operator

/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator'); //# is for element Id and . is used to selcet the element with a class

const totalDisplay = document.querySelector('.display');

totalDisplay.innerText = 0;

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', ({ target}) => {
  const buttonText = target.innerText;

  if (target.classList.contains('button')) {
    if (buttonText === 'C') {
      currentNumber = '';
      previousNumber = '';
      operation = '';
      totalDisplay.innerText = 0;
    } else if (buttonText === '=') {
        if (previousNumber !== '' && currentNumber !== '') {
          calculate();
        }
    } else if (['+', '-', '*', "/"].includes(buttonText)) {                   //creates the array
        if (currentNumber !== "") {
          if (previousNumber !== "") {
            calculate();
          }
          operation = buttonText;
          previousNumber = currentNumber;
          currentNumber = '';
        }
    } else {
      currentNumber += buttonText;
      totalDisplay.innerText = currentNumber;
    }
  }
});
/*-------------------------------- Functions --------------------------------*/
// parseFloat converts strings into numbers (remember this function)
const calculate = () => {
  let result;
  const prev = parseFloat(previousNumber);            
  const current = parseFloat(currentNumber);

if (operation === '+') {
  result = prev + current;
} else if (operation === '-') {
  result = prev-current;
} else if (operation === '*') {
  result = prev * current;
} else if (operation === '/') {
  result = prev / current;
}
  totalDisplay.innerText = result;
  currentNumber = result.toString();
  previousNumber = '';
  operation = '';
};

//roughly 6hours to complete. 
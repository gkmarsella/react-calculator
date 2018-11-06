export default function calculate(operation, num1, num2) {
    if(operation === '+'){
      return num1 + num2;
    }

    if(operation === '-'){
      return num1 - num2;
    }

    if(operation === '/'){
      return num1 / num2;
    }

    if(operation === 'X'){
      return num1 * num2;
    }
}
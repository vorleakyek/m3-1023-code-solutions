import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const operator = process.argv[3];
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);

switch (operator) {
  case 'plus':
    console.log('Result:', add(num1, num2));
    break;
  case 'minus':
    console.log('Result:', subtract(num1, num2));
    break;
  case 'over':
    console.log('Result:', divide(num1, num2));
    break;
  case 'times':
    console.log('Result:', multiply(num1, num2));
    break;
  default:
    console.log('Invalid operator!');
}

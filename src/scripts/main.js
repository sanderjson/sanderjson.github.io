// Import a stylesheet.
import '../styles/main.css';

// Import a couple modules for testing.
import { sayHelloTo } from './modules/mod1';
import addArray from './modules/mod2';

//  Add a debugger.
import debug from 'debug';
const log = debug('app:log');

//  Disable logging in production
console.log('SEARCH', ENV);
if (ENV !== 'production') {
	debug.enable('*');
	log('Logging is enabled!');

} else {
	debug.disable();
}

// Run some functions from our imported modules.
const result1 = sayHelloTo('Jason');
const result2 = addArray([ 1, 2, 3, 4 ]);

// Print the results on the page.
const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText = `sayHelloTo('Jason') => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}`;

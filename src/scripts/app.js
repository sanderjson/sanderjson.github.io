// Import a stylesheet.
import '../styles/main.css';

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

import { clickButton } from './modules/mod1';

clickButton();

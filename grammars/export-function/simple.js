// show how to get export from single function.
var Junius = require('./string-process');
var junius = new Junius();

console.log(junius.get());

// how to get all methods defined in module.
import {sqrt, square, diag} from './name-export';
console.log(sqrt, square(10), diag(1, 2))



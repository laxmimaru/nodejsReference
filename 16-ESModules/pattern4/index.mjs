/*  --Method -1 -------

import * as math from './pattern4.mjs'

const { add, subtract } = math; */

/**Method - 2 ***/

import {add,subtract} from './pattern4.mjs' //named exports ,that should be imported with the exact name they were exported

console.log("sum = ", add(2, 4));

console.log("difference = ", subtract(2, 4));

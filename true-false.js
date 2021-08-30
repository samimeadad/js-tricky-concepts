/* Truthy
1. true (boolean).
2. any positive and negative number is truthy (-2, 2, -34, 34).
3. any string is truthy (including white space). '0' is truthy.

Falsy
1. fasle (boolean).
2. 0 is falsy. if 0 is a number. '0' is a string. it is not false.
3. any empty string ('') is flasy.
4. undefined is falsy
5. null is falsy.

**********Anything else that is not falsy is truthy**********
*/

let x = true; //truthy
x = false; //falsy
x = 10; //truthy
x = -22; //truthy
x = 0; //falsy
x = 'sami'; //truthy
x = ''; //falsy
x = undefined; //falsy
x = null; //falsy
x = []; //truthy
x = { }; //truthy
x = '0'; //truthy
x = ' '; //truthy

if ( x ) {
    console.log( 'The Value ' + x + ' is truthy' );
}
else {
    console.log( 'The Value ' + x + ' is falsy' );
}
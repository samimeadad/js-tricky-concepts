/* 
Undefined Cases 
1. The varialbe is declared, but the value is not set.
2. Function but did not return anything and we try to assign this funciton to another variable. Then the variable using this function will be undefined.
3. Just wrote return, but did not return anything (value or variable);
4. Function parameters that are not passed are undefined.
5. Object property that does not exist in an object return undefined when it is called.
6. Accesssing array element out of range/index returns undefined.
7. Accessing deleted (with delete keyword) array element is undefined.
*/

let a; //undefined
// console.log( a );

function add( x, y ) {
    const sum = x + y;
}
const result1 = add( 3, 2 );
// console.log( result );

function sub( x, y ) {
    const result = x - y;
    return;
}
const result2 = sub( 8, 2 );
console.log( result2 );
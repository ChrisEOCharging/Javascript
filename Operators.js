/**** Artimetic Operators ****/
/*
+   Add
-   Subtract
*   Multiply
/   Divide
%   Modulus (Remainder of Division
**  Exponential
++  Increment
--  Decrement
*/

// let x = 5;
// let y = 2;

// let result = x + y;
// console.log(result)
// console.log('Result is: '+result)

// let result2 = x - y;
// console.log(result2)
// console.log('Result is: '+result2)

// let result3 = x ** y;
// console.log(result3)
// console.log('Result is: '+result3)

// let a = 10;
// a--
// console.log('Result is: '+a)

// let b = 10
// let q = 2 * a++

// console.log('Result is: '+q)

// /**** Assignment Operators ****/
/*
=   Assign
+=  Add and assign
-=  Subtract and assign
*=  Multipy and assign
/=  Divide and assign
%=  Modulus and assign
**= Exponential and assign
*/

// let z = 10;
// console.log(z)
// z = 10 + 20;
// console.log(z)

// z += 5;
// console.log(z)

/*** Comparison Operators ****/
/*
==  Equal to
=== Equal value and equal type
!=  Not equal to
!== Not equal value and type
>   Greater than
<   Less than
>=  Greater than or equal to
<=  Less than or equal to
?   Ternary Operator (Usually requires a : too)
*/

// let x = 10;
// let y = 10;
// let result = x == y;
// console.log(result)

// //Checks the value, not the type so will equal true
// let xx = 10;
// let yy = '10';
// let result2 = xx == yy;
// console.log(result2)

// //Checks the Value AND Type, not the type so will equal true
// let xxx = 10;
// let yyy = '10';
// let result3 = xxx === yyy;
// console.log(result3)

// //Checks the Value is not equal to, not the type so will equal true
// let xxxx = 10;
// let yyyy = 10;
// let result4 = xxxx != yyyy;
// console.log(result4)

// //Checks the Value AND Type is not equal to, not the type so will equal true
// let xxxxx = 10;
// let yyyyy = 20;
// let result5 = xxxxx != yyyyy;
// console.log(result5)

// //Greater than, with alternate way of writing the code in the log
// let xxxxxx = 10;
// let yyyyyy = 7;
// console.log(xxxxxx <= yyyyyy);

// /* Ternary Operator 
// Takes 3 arguments: 

// Condition ? True Statement : False Statement

// If e is greater than r, show e (if true) else, show r
// If e is NOT greater than r, show r (if false) else, show e
// */

// let e = 11;
// let r = 10;

// let newResult = e > r ? e : r
// console.log(newResult)

/**** Logical Operators ****/
/*
&&  True if both conditions are true
||  True if any of the conditions are true
!   Will return true if the condition is false and vice versa
*/

/* True if any of the conditions are True
|| = OR
*/

// let a = false;
// let b = false;

// console.log(a || b)

/* True if BOTH conditions are True
&& = TRUE
*/

// let a = false;
// let b = false;

// console.log(a && b)

/* True if one Value does not match the other
!= = TRUE
*/

// let a = true;
// let b = false;

// console.log(a != b)

/* True if the Value is false, returns false is Value is True
! = TRUE if Value false
*/

// let a = false;
// let b = true;

// console.log(!a)

/**** Type Operators *****/
//Finding the Type used
/*
console.log(typeof 'Chris');                Returns "String"
console.log(typeof 123);                    Returns "Number"
console.log(typeof false);                  Returns "Boolean"
console.log(typeof NaN);                    Returns "Number"
console.log(typeof[1,2,3,4]);               Returns "Object"
console.log(typeof{name:'Chris', age: 31}); Returns "Object"
console.log(typeof new Date());             Returns "Object"
console.log(typeof null);                   Returns "Object"
console.log(typeof function () {});         Returns "Function"
console.log(typeof myClass);                Returns "Undefined"
/*

// let firstName = 'Chris';
// console.log(typeof firstName);
// console.log(typeof 123);
// console.log(typeof true);

//Returns false because 'Deaves' has not been converted as a String
// let lastName = 'Deaves';
// console.log(lastName instanceof String);

//Returns true because 'Deaves' is now a String
// let lastName = new String('Deaves');
// console.log(lastName instanceof String);

// let num1 = new Number(1)
// console.log(num1 instanceof Number);
// console.log(num1)

// let num2 = new Number(2)
// console.log(num2 instanceof Number);
// console.log(num2)

// let num3 = new Number(3)
// console.log(num3 instanceof Number);
// console.log(num3)

// console.log('The following numbers are '+num1, +" " +num2, +" " +num3, )

/**** Bitwise Operators ****/
/*Bitwise Operators treat arguments as 32-Bit numbers and work
on the level of their binary representation 

&   AND         Sets each bit to 1 if both bits are 1
|   OR          Ses each bit to 1 if one of two bits is 1
^   XOR         Sets each bit to 1 if only one of two bits is 1
~   Not         Inverts all the bits
<<  Left Shift  Shifts left and fills empty spaces with 0
>>  Right Shift Shifts right 

When using a decimal to binary converter, add 0's to beginning to 
make values 4 digits

1 and 1 = 1
0 and 0 = 0
1 and 0 = 0
0 and 1 = 0

Example: 3^5 
3 = 0011
5 = 0101

0 and 0 = 0     Since both values are 0, 0 is the correct value
0 and 1 = 1     Since both values are differen, 1 is the correct value
1 and 0 = 1     Since both values are differen, 1 is the correct value
1 and 1 = 0     Since both values are 0, 0 is the correct value
Binary code for 0110 = 6
*/

//This is as per example mentioned above, so answer will be 6
let a = 3
let b = 5
console.log(3^5)

//A is 1 = 0001
//B is 2 = 0010
//Find c & d

let c = 1
let d = 2

//Answer should be 0 as the criteria for & is not met
console.log(c & d)

/* Left Shift example
5 << 1
0110 = 5 in Binary
Because of the '1', everything shifts to the left once
making a new binary number of 1010 (after shifting, every digit
after the shift becomes a 0)
New number is therefore 10
*/
//This will move the value twice, so 0101 will become 010100 = 20
console.log(b << c)
//This will move the value twice, so 010100 will become 0101000 = 40
console.log(b << a)




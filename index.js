/**
 * Press / two stars and enter to build comments section
 * STARTUP 3 - Objects, Variable Declaration Assginment, Data Types , Premitive Type , Reference Type
 */
console.log("Connected")
console.log('String in single quotes')
console.log("String in double quotes")
console.log(10) //Number
console.log('10') //String
console.log(5.7)
    //numbers in javascript dont divide into float, decimal etc its just number
console.log(NaN) //Not a Number
console.log(`Backtick and embeded expression calculating 4-4 = ${4-4}`)


console.log("Boolean")
console.log(true)
console.log(false)

console.log(null) //indicator of abscence of any value.

console.log(undefined) //never assign this value for any variable. used by JS internally

console.log("Symbol")

let a = Symbol("My Symbol")
let b = Symbol("My Symbol")
console.log(a)
console.log(Symbol.iterator)
console.log(a == a)
console.log(a == b)
console.log(a)
console.log(Symbol("My Symbol") == Symbol("My Symbol"))



//Reference Object Type
console.log({}) //empty objectlet

let newObject = { a: 10, b: true, c: "String" } //Object Literal Notation
console.log(newObject)

//Variable Declaration - 3 Types var, let , const
//let and const introduced in ES6
let a1 //declaration
var b1 //declaration
const c1 = 10 //declaration and assignment //with const delcare and assingment needs to happen at the same time
b1 = true //assignment through an expression


console.log(`a=${a1}`)
console.log(`b=${b1}`)
console.log(`c=${c1}`)

//lets allows re-assign and const does not
let a2 = 10

//let a2 = 10 : not allowed, already declared - error
a2 = 20

const a3 = 10;
//a3 = 20; Not possible, error


//console.log(a4) //Reference error a4 is not defined

let a4 //variable declared
console.log(a4) // a4 is undefined as we have not assinged anything to a4 yet

a4 = true

console.log(a4) // not its assinged . console will display true

// with let and var - declaration assings values as undefined.

/**
 * /**
 * 
 * /**Exercise 1 : Variable Declaration and assignment
 * Declare variable "myObject1" and assigne value {}
 * Print this variable to the console
 * NOTE : variable "myObject1" will not be reassgined in the future
 * 
 ** /
 */


const myObject1 = {}
console.log(myObject1)


/**
 * Exercise 2 : Variable Reusage
 * Declare variable x1 and assing value 10 to it.
 * Declare variable y1 and assing value true to it.
 * Declare myObjet2 and assing object with two name-vlaue pair and print
 * {a:10, b:true,_proto_:Object}
 * Declare "anotherObject"
 * Later assign value to it- Object with 3 name -value pairs
 * Print
 * {
 * newA: 20,
 * b: true,
 * c: {a:10, b:tue,_proto_:
 * Object},
 * _proto_:Object
 * }
 */

let x1 = 10
const y1 = true
const myObject2 = {
    a: x1,
    b: y1, //adding comma is not required but is a best practise
}
console.log(myObject2)
x1 = 20
let anotherObject
anotherObject = {
    newA: x1,
    b: y1,
    c: myObject2,
}
console.log(anotherObject)


/**
 * Javascript is a Dynamically Typed Language..value of other data types that be assigned to a variable
 * that
 * was orginally declared and assinged some other datatype
 * Type of the variable is set dynamically depending on the value
 */
let a5 = 10
console.log(a5)
console.log(typeof a5)
a5 = "String"
console.log(a5)
console.log(typeof a5)
a5 = true
console.log(a5)
console.log(typeof(a5))


function afun() {
    console.log("Hey there")
}

afun()

afun = "String"

//afun() - Uncaught SyntaxError: Unexpected end of input
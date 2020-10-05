/**
 * Practice Set 1 : Simple Function Creation
 */
console.log("Practice Set 1 : Simple Function Creation")

function mySimpleFunction() {}
console.log(mySimpleFunction)
mySimpleFunction() //Nothing is done as there are no statements in the funciton body.
const functionResult = mySimpleFunction()
console.log(functionResult) //Undefined
console.log(mySimpleFunction()) //Undefined
console.log(mySimpleFunction(4, 5)) //Undefined - you are able to call a function with arguments even if there are no parameters in the function.


/**
 * Practice Set 2 : Simple Function Creation with Function body and return statement
 */
console.log("Practice Set 2 : Simple Function Creation with Function body")

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

console.dir(myFn)
console.log(myFn(1, 2))

console.log(myFn.name)
console.log(myFn.length)



/**
 * Practice Set 3 :Parameters of the function
 */
console.log("Practice Set 3 :Parameters of the function")

function myFunc(a, b) {
    console.log(a)
    console.log(b)
}

myFunc()
myFunc(10, 5)
myFunc("abc")

// in all cases the function returns undefined -its not printed on the console as we are not assigning to any variable and printing that variable.

/**
 * Practise 4 : Function Scope, reuse parameters
 */
console.log("Practise 4 : Function Scope, reuse parameters")

function myFunScope(a, b) {
    //Function scope of parameter a and b
    console.log(a, b)
}

//showing you can reuse the parameters
function myFunReuseab(a, b) {
    console.log(a, b)
}

//same parameter names used as variables
//Global Scope
const a = true
const b = null

myFunScope(1, 2)
myFunReuseab("Zameer", "Rocks")

console.log(a, b)



//console.log(a)
//index.js:60 Uncaught ReferenceError: a is not defined


//IMPORTANT : undefined + undefined =NaN
console.log(undefined + undefined)


/**
 * Practice Set 5 : What happens after return
 */

function myFuncReturn(a) {
    console.log(a)
    return a //function stops here
    console.log(a)
}

console.log(myFuncReturn(true))



/**
 * Excercise 1: Create function called mult should have 3 parameters
 * 2. create new variable and assign to it result of multiplication of all 3 parameters
 * 3. print to the console result
 * 4. funciton will not return anything
 */

console.log("Excercise 1")

function mult(a, b, c) {
    const result = a * b * c //rember if const is used assigment should be done at the same time
    console.log(result)
}
mult(3, 4, 5)
console.log(mult(3, 4, 5))
mult(3, 4, "aba") //Nan
mult() //NaN

/**
 * Excercise 2: Create a function concatStrings with 2 parameters
 * 2. return the concatenated String
 */
console.log("Excercise 2")

function concatStrings(Str1, Str2) {
    const result = Str1 + " " + Str2
    return result
}

console.log(concatStrings("Zameer", "Sayed"))

/**
 * Excercise 3 : Create two function and one will be placed inside the other
 * 1. Create function "outerFunction" with 2 parameters
 * 2. create function inside of outerFunction named "innerFunction" with 1 parameter
 * 3. innerFunction will return square of parameter
 * 4. In the outerFunction sum both parameter
 * 5. Call "innerFunction with argument that is equal to sum of both parameters 
 * of the "outerFunction"
 * 6. Log to the console result of the "innerFunction"
 * 
 */

function outerFunction(a, b) {
    const sum = a + b
    const result = innerFunction(sum)
    console.log(result)

    function innerFunction(a) {
        return a * a
    }
}

outerFunction(2, 5)


/**
 * Practise Set 5 : Anonymous Functions
 *
 */

//Function Expression - No Names, cannot be used standalone.
//Common Usage - passed as argument in the call to the other function


const myFuncVariable = function(a, b) {
        return a + b
    }
    //myFuncVariabe is just a variable that holds function expression as value.

myFuncVariable(5, 4)



const myAnonymousFuncVariable = function() {}
console.log(myAnonymousFuncVariable)


/**
 * Practice Set 6 : Callback Function
 */

setTimeout(function() {
        console.log("Delayed message displayed after 1sec")
    }, 1000) //millisecons - 1000 is 1 secs

setTimeout(function myFName() {
        console.log("Delayed message displayed after 1sec")
    }, 1000) //you can pass named function but doesnt make sense as its not available in the outer scope.

//SetInterval // is one of the method of global window object same as setTimeout
let i = 1
setInterval(function() {
    //console.log("Message logged after every 1 sec" + i++, 100000)
})

/**
 * Excercise 4: Function Expression - Using SetTimeout, SetInterval, ClearInterval
 * Print Only 5 Messages with interval 2 seconds
 *  "Here is message number 1"
 *  "Here is message number 2"
 *  "Here is message number 3"
 *  "Here is message number 4"
 *  "Here is message number 4"
 */

let y = 1
const myInterval = setInterval(function() {
    console.log("Here is message number" + y)
    y++
}, 2000)

console.log("My Interval")
console.log(myInterval)

setTimeout(function() {
    clearInterval(myInterval)
}, 10000)
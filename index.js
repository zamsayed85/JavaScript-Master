console.log({})
    //{} is an Object


const myCity = {
    city: "New york",
    country: "USA"
}


//Object Modification
//dot notation to access the value or change value of property

console.log(myCity.city)
myCity.city = "New Jersey"
console.log(myCity.city)

//adding properties to existing object using same dot notation
myCity.popular = true
console.log(myCity)

//adding properties to existing object using same dot notation
myCity["population"] = 102423424

//difference between . and [] notation
/**
 * 
 */

const countryPropertyName = "state"
myCity[countryPropertyName] = "NY"


console.log(myCity)

//rempoving property from existing object using delete
//delete is an operator. 

delete myCity.country
console.log(myCity)


//. first choice
// if . not possible use [] when property names are stored in other variable[]



//Nested Objects
const myNewCity = {
    city: "New York",
    info: {
        popular: true,
        country: "USA",
    }
}
console.log("myNewCity")
console.log(myNewCity)

console.log(myNewCity.info.popular)

console.log(myNewCity.info["popular"])

//Multiple rows withing same objects


/**
 * Exercice 1 
 * 1. Create variable called myPost
 * 2. Initial value should be empty object
 * 3. Add Property called "postTitle" and value "Object is reference type"
 * 4. Add one more property "postLikes" with value 0
 * 5. Add third property "shared" and set its value to false
 * 6. Increase value of the "postLikes" by 1
 * 7. Delete propety "Shared"
 */

const myPost = {}
myPost.postTitle = "Object is reference Type"
myPost.postLikes = 0
myPost.shared = false
myPost.postLikes++;
delete myPost.shared

console.log(myPost)


/**
 * Excercise 2
 * 1. Use Const for object declararion
 * 2. Modify the value of object
 */

const myObject2 = {}
myObject2.a = true
console.log(myObject2)

// myObject2 = {
//         a: true
//     } //index.js:97 Uncaught TypeError: Assignment to constant variable.

// you cannot change object varaible myObject2 as a whole.
//but with const you can mutate the properties.



/**
 * Excercise 3
 * 1. Create Variable called myObject3
 * 2. Add property a with value 10
 * 3. create another variable copyofmyObject3
 * 5. its value should be myObject3
 * 6. Add new property "b" with value false to the "copyOfMyObect"
 */


let myObject3 = { a: 10 }
console.log(myObject3)

let copyOfMyObect = myObject3
copyOfMyObect.b = false
console.log(copyOfMyObect)
console.log(myObject3)


//pointer to the same obect in memory

//What happens when you try to execute non-existing property of an Object


console.log(myObject3.c) //undefined - Code execution is not stopped

//code execution is stopped
// console.log(v) //error when accessing non declared vaariable
//     //Uncaught ReferenceError: v is not defined

myObject3.newProperty = undefined
    //dont use value as "undefined"  - IMPORTANT - this will unable us to indentify
    //property exits in object or not use "null" instead

console.log(myObject3)
console.log(myObject3.myNewCity)

/**
 * Exercise 4
 * 1. Create Obect - ObectwithNestedObject with initial value {}
 * 2. Add property "nestedObject" with initial value {}
 * 3. Add property "a" with value "null" to "nestedObject". Use dot notation
 * 4. Add property "b" with value true to "nestedObject". Use bracket notation
 * Create new variable with property name
 */

console.log("Exercise 4")
const objectWithNestedObject = {}
objectWithNestedObject.nestedObject = {}

objectWithNestedObject.nestedObject.a = null

const newPropertyName = "b"

objectWithNestedObject.nestedObject[newPropertyName] = true

console.log(objectWithNestedObject)



/***********METHOD**************/
//properties with function as a property value

const myCityNew = {
    city: "New York",
    cityGreeting: function() {
        console.log("Greetings!!")
    }
}

console.log(myCityNew)
console.log(myCityNew.cityGreeting)

//Calling the method or function from the object.
myCityNew.cityGreeting();
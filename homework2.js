//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteFoods(person) {
    for (let key in person) {
      if (Array.isArray(person[key])) {
        console.log(`${key}:`)
        for (let item of person[key]) {
          console.log(` - ${item}`)
        }
      } else if (typeof person[key] === 'object') {
        console.log(`${key}:`)
        for (let subKey in person[key][0]) {
          console.log(` - ${subKey}: ${person[key][0][subKey]}`)
        }
      } else {
        console.log(`${key}: ${person[key]}`)
      }
    }
  }
  displayFavoriteFoods(person3);
  
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age) {
    this.name = name
    this.age = age
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age
    this.addAge = (years) => {
        this.age += years
    }
}
 const person1 = new Person('Alice', 30)
 const person2 = new Person('Ale', 25)
 person1.printInfo()
 person2.printInfo()
 person1.addAge(3)
 person1.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function chechStringLength(str){
    return new Promise((resolve, reject) => {
        if (typeof str === 'string') {
            if (str.length > 10) {
                resolve('Big word')
            } else {
                resolve('Small Number')
            }
        } else {
            reject('Input is not a string')
        }
    });
}
chechStringLength('This is a big word')
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.error(error)
  })

//* Codewars Problems //
//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.//
https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript
function postivieSum(arr) {
    let sum=0
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > 0){
            sum += arr[i]
        }
    }
    return sum
}
const numbers = [1, -4, 7, 12]


//Many programming languages provide the functionality of converting a string to uppercase or lowercase. For example, upcase/downcase in Ruby, upper/lower in Python, and toUpperCase/toLowerCase in Java/JavaScript, uppercase/lowercase in Kotlin. Typically, these methods won't change the size of the string.

//For example, in Ruby, str.upcase.downcase.size == str.size is true for most cases.
//However, in some special cases, the length of the transformed string may be longer than the original. Can you find a string that satisfies this criteria?
//For example, in Ruby, That means str.upcase.downcase.size > str.size
//You should just set the value of STRANGE_STRING to meet the previous criteria.
const STRANGE_STRING ='ß';
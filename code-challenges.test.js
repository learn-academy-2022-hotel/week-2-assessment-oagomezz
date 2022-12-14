// ASSESSMENT 2: Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest



// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
// function: declare a function times3 which takes the values of the array provided and multiplies values by factor of 3.
// input: An array of numbers 
// output: An array of numbers multiplied by value of 3.

// 

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
    describe("multiplyby3", () => {
        it("returns values multiplied by 3", () => {
            expect(multiplyBy3([6, 7, 8, 9, 10])).toEqual([18, 21, 24, 27, 30])
            expect(multiplyBy3([24, 27, 30, 33, 36])).toEqual([72, 81, 90, 99, 108])
        })       
    })

//     // multiplyby3 › returns values multiplied by 3
    
//     //     ReferenceError: multiplyBy3 is not defined
    
//     //       27 |     describe("multiplyby3", () => {
//         //       28 |         it("returns values multiplied by 3", () => {
//             //     > 29 |             expect(multiplyBy3([6, 7, 8, 9, 10])).toEqual([18, 21, 24, 27, 30])
//             //          |             ^
//             //       30 |             expect(multiplyBy3([24, 27, 30, 33, 36])).toEqual([72, 81, 90, 99, 108])
//             //       31 |         })       
//             //       32 |     })
            
//             //       at Object.expect (code-challenges.test.js:29:13)
            
//             // Test Suites: 1 failed, 1 total
//             // Tests:       1 failed, 1 total
            
//             // b) Create the function that makes the test pass.
            const multiplyBy3 = (array) => {
                return array.map((value) => value * 3)
              }
              console.log(multiplyBy3(numbersArray1))
              console.log(multiplyBy3(numbersArray2))
//   multiplyby3
//   ✓ returns values multiplied by 3 (1 ms)
// dividesBy3

// // --------------------1) Create a function that takes a object as an argument and decides if the number inside is evenly divisible by three or not.
// // function: declare a function that takes an object as an input
// // input:an object with a key value pair of a number data type
// // output: a string using string interpolation to identify if the value is divisible by three or not. 


// // a) Create a test with expect statements for each of the variables provided.
    describe("dividesBy3", () => {
        it("returns if the value is divisible by 3", () => {
        expect(dividesBy3(15)).toEqual(`${object1.number} is divisible by 3`)
        expect(dividesBy3(0)).toEqual(`${object2.number} is divisible by 3`)
        expect(dividesBy3(-7)).toEqual(`${object3.number} is not divisible by 3`)
    })
})
// // // ReferenceError: dividesBy3 is not defined

// //       48 |     describe("dividesBy3", () => {
// //       49 |         it("returns if the value is divisible by 3", () => {
// //     > 50 |         expect(dividesBy3(15)).toEqual(`${object1.number} is divisible by 3`)
// //          |         ^
// //       51 |         expect(dividesBy3(0)).toEqual(`${object2.number} is divisible by 3`)
// //       52 |         expect(dividesBy3(-7)).toEqual(`${object3.number} is not divisible by 3`)
// //       53 |     })

// //       at Object.expect (code-challenges.test.js:50:9)

// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.184 s, estimated 1 s


const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
// b) Create the function that makes the test pass.

const dividesBy3 = (exobj) => {
    if(exobj % 3 === 0)
    return `${exobj} is divisible by 3`
    else 
    return `${exobj} is not divisible by 3`
}
console.log(dividesBy3(object1.number))
console.log(dividesBy3(object2.number))
console.log(dividesBy3(object3.number))
// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// function: Declare a function that takes in an array of words and returns an array with all uppercase words.
// Input: an array of words
// Output: an array of words with capital letters
// a) Create a test with expect statements for each of the variables provided.

        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
describe ("upperCaseArray", () => {
                it("returns array with capital letters", () => {
                     expect(upperCaseArray(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]),
                     expect(upperCaseArray(["temperature", "database", "chopsticks", "mango"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
        })
    })
//     ReferenceError: upperCaseArray is not defined

//     117 | describe ("upperCaseArray", () => {
//     118 |                 it("returns array with capital letters", () => {
//   > 119 |                      expect(upperCaseArray(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]),
//         |                      ^
//     120 |                      expect(upperCaseArray(["temperature", "database", "chopsticks", "mango"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     121 |         })
//     122 |     })

//     at Object.expect (code-challenges.test.js:119:22)


// b) Create the function that makes the test pass.

const upperCaseArray = (array) => {
    return array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
       
    })
}
console.log(upperCaseArray(randomNouns1))
console.log(upperCaseArray(randomNouns2))

// upperCaseArray
//  Output:   ✓ returns array with capital letters
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// Function: Declare an function vowelFinder that takes in a string and outputs the index of the first vowel in the string. 
// Input: A string of letters
// Output: Index of the first vowel in the string given.
// a) Create a test with expect statements for each of the variables provided.
describe ("vowelFinder", () => {
    it("returns the index of the first vowel", () => {
        expect(vowelFinder("learn")).toEqual(1)
        expect(vowelFinder("academy")).toEqual(0)
        expect(vowelFinder("challenges")).toEqual(2)
    })
})
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// ReferenceError: vowelFinder is not defined

//       151 | describe ("vowelFinder", () => {
//       152 |     it("returns the index of the first vowel", () => {
//     > 153 |         expect(vowelFinder("learn")).toEqual(1)
//           |         ^
//       154 |         expect(vowelFinder("academy")).toEqual(0)
//       155 |         expect(vowelFinder("challenges")).toEqual(2)
//       156 |     })

//       at Object.expect (code-challenges.test.js:153:9)


// b) Create the function that makes the test pass.
const vowelList = /[a,e,i,o,u]/i;
const vowelFinder = (string) => {
    return string.match(vowelList).index
}
console.log(vowelFinder(vowelTester1))
console.log(vowelFinder(vowelTester2))
console.log(vowelFinder(vowelTester3))
// Output:  vowelFinder
// ✓ returns the index of the first vowel
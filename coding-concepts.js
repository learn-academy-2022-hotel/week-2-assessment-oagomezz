// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
// console.log(cohort.split(""))

// a) Your answer:"H","o","t","e","l" "2","0","2","2"
// b) Verify and explain: The answer was going to return all of the individual elements within their own quotations in the array because of the seperator that was identified. If a space was left between the Seperator (" ") the console log would have seperated the words by the space returning ["Hotel", "2022"]. 


// --------------------2) What will this log?
const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: It's going to return as undefined because the code does not indicate it needs to "return" anything after the name of Learn student is applied in the console log.
// b) Verify and explain: As expected the function came back as undefined due to no indication to apply the name of Learn student to the output. If the return was added before the String interpolation it would return the `Hello, LEARN Student!`

// --------------------3) What will this log?
const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:[8,10,12,14,16]
// b) Verify and explain: The answer came back with the value being multiplied by 2 because the .map function will take an input of an array and return an output of equal length to the array along with any other function applied. In this one the value was supposed to return a number multiplied by two and placed into the same array.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[11,13,15]
// b) Verify and explain: The answer returned all of the odd numbers in the array. The .filter will return an array with all the values that fit the given condition for instance in this scenario the number has to return a value not equal to 0 when dividing using the modulo and the bang. The modulo indicates it is requiring a number that doesn't return a remainder however when paired with the logical not (!==) it will pass the condition for any element that returns a remainder.
// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:"Javascript"
// b) Verify and explain: With myCodingSkills being the object, the .language lets javascript know you're going to be pulling the zeroeth index in that key value. Thus it would return Javascript. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: the cohort key and the year key are static values so by inputting the this.student value to in the console log is going to return this.student = george along with the rest of the keys in the object. 
// b) Verify and explain: Since we're working with classes and classes act as the instructions to build new objects. the parameter name was identified with the key "this.student" which makes the placeholder of name get updated to the name george when the console log is returned. 

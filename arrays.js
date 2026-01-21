let numbers = [1,2,3,4,5,6,7,8,9,10,"Eleven",false]
console.log(numbers) //(12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Eleven', false]
console.log(typeof(numbers)) //object

//accessing array items
console.log(numbers[5]) //6
console.log(numbers.at(5)) //6
console.log(numbers.at(-1)) //false

//updating or modifying values
numbers[0] = "One"
console.log(numbers) //(12) ['One', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Eleven', false]

//length
console.log(numbers.length) //12

//slice
let numbers2 = numbers.slice(3,6)
console.log(numbers2) // [4, 5, 6]



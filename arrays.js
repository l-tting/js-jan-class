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

//push
let names = ["David","Daniel","Hillary"]
names.push("Ken","Mary")
console.log(names) //['David', 'Daniel', 'Hillary', 'Ken', 'Mary']

//unshift
names.unshift("Jane","Jack")
console.log(names)//['Jane', 'Jack', 'David', 'Daniel', 'Hillary', 'Ken', 'Mary']

//pop
names.pop()
console.log(names) //['Jane', 'Jack', 'David', 'Daniel', 'Hillary', 'Ken']

//shift
names.shift()
console.log(names) //['Jack', 'David', 'Daniel', 'Hillary', 'Ken'] 

//concatting arrays
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = arr1.concat(arr2)
console.log(arr3) //[1, 2, 3, 4, 5, 6]


//includes
let letters = ['w','d','h','l','g']
console.log(letters.includes('w')) // true

// sort 
let fruits = ['mango','banana','apple','orange']
fruits.sort()
console.log(fruits) //['apple', 'banana', 'mango', 'orange']

let values = [1,20,10,4,3] // ->  ['1','20','10','4','3']
values.sort()
console.log(values) //[1, 10, 20, 3, 4]


//Splice to remove elements 
let y = [1,2,3,4,5,6,7,8,9]
y.splice(2,2)
console.log(y) //[1, 2, 5, 6, 7, 8, 9]

//splice to add elements
y.splice(2,0,100,200)
console.log(y) //[1, 2, 100, 200, 5, 6, 7, 8, 9]

//splice to replace elements
y.splice(4,2,300,400)
console.log(y) //[1, 2, 100, 200, 300, 400, 7, 8, 9]


let x = [1,2,3,[5,6,[7,8,[9,10]]]]
//print the value 10 to the console
console.log(x[3][2][2][1])


//length

let colors  = ['red','green','blue']
colors[1] = 'pink'
console.log(colors) //['red', 'pink', 'blue']

let lengthOfColors = colors.length
console.log(lengthOfColors)//3

colors.pop()
console.log(colors) //) ['red', 'pink']

// Assignment 2: Extract Subarray
// Given an array “sourceArray”, extract a subarray “extractedArray”
//  from index 2 to index 4 using the .slice() method. Then, modify the 
// extractedArray by replacing its elements with 'x', 'y', and 'z' using
//  the .splice() method. Finally, display both the sourceArray and the
//  modified extractedArray.

let sourceArray = [1,2,3,4,5,6,7,8,9,10]

let extractedArray = sourceArray.slice(2,5)
console.log(extractedArray) //[3, 4, 5]

extractedArray.splice(0,3,'x','y','z')
console.log(extractedArray) //['x', 'y', 'z']
console.log(sourceArray) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




let x = 10
let y = 12
let sum = x + y
console.log(sum)


function add_nums(){
    let x = 10
    let y = 12
    let sum = x + y
    console.log(sum)
}

function add_numbers(x,y){
    return x + y
}

let sum1 = add_numbers(2,3)
let sum2 = add_numbers(4,5)
console.log(sum1)//5
console.log(sum2)//9


// TASK 1: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that prompts the user to enter the base and height
//  of a triangle and returns its area.

let base = Number(prompt("Enter base: "))
let height = Number(prompt("Enter height: "))

function get_area(a,b){
    return 0.5 * a * b
}
// let area = get_area(base, height)
// console.log(area)


// Prompt the user for a number either on a form input or the terminal. 
// Depending on whether the number is even or odd, display  either “odd” or “even” to the user.
//  Hint: how does an even / odd number react differently when divided by 2?
// Once you learn functions,revisit this and write this code inside a function.


let number = Number(prompt("Enter a number"))


function check_even(num){
    if(num%2==0){
        result ="Even number"
    }else{
        result = "Odd number"
    }
    return result
}

let even = check_even(number)

console.log(even)

//anonymous function
let add = function(a,b){
    return a + b
}
let value = add(1,2)
console.log(value)


// arrow function
let test = () => {
    console.log("Testing anonymous functions")
}

test()



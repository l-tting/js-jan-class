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
let area = get_area(base, height)
console.log(area)
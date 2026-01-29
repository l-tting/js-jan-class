    
for (let i=1; i<=10 ;i++){
    console.log(i)
}

for (let i=10; i>=1; i--){
    console.log(i)
}

//loop through arrays
let fruits = ["apple","mango","peach","banana","passion"]

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

for (let i=0; i < fruits.length ;i++){
    console.log(fruits[i])
}


let numbers = [1,2,3,4,5,6,7,8,9,10]
//output the even numbers in the array above 

let arr = []
for(let i=0;i < numbers.length ;i++){
    if(numbers[i]%2 === 0){
        console.log(numbers[i])
    }
}


//while
let i = 1
while (i <= 10){
    console.log(i)
    i++
}


let variable =  10
//do while
let x = 1
do{
    console.log("Starting loop")
    console.log(i)
    x++
}while(x <= 10)






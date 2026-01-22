//  A student’s final grade is determined by their exam score (an number between 0 and 100) using the rules below:
//         If the score is 70 or above, the grade is A
//         If the score is 60 to 69, the grade is B
//         If the score is 50 to 59, the grade is C
//         If the score is 40 to 49, the grade is D
//         If the score is below 40, the grade is F
//         Task:
//         Write a JavaScript program that:
//         Stores a student’s score in a variable.
//         Uses if, else if, and else statements to determine the grade.
//         Prints the grade to the console.


let score = Number(prompt("Enter student score"))

if(score >= 70 && score <=100){
    console.log("Grade A")
}else if(score >=60 && score <= 69){
    console.log("Grade B")
}else if(score >=50 && score <= 59){
    console.log("Grade C")
}else if(score >=40 && score <= 49){
    console.log("Grade D")
}else if(score >=0 && score < 40){
    console.log("Grade F")
}else{
    console.log("Invalid, score out of range")
}




// Write a program which gets a phone number from a form input or terminal.
//  Validates the phone number by checking if it starts with +254.. or 07..
//  or 7… or 254.. or 01... or  1.. Convert the number to start with +254…
// e.g if a user enters “0712345678”, the program should display “+254712345678”
// e.g if a user enters “0112345678”, the program should display “+254112345678”
// e.g if a user enters “712345678”, the program should display “+254712345678”



// let phone_number = prompt("Enter phone number");

// function validate_number(phone_no) {
//   if (phone_no.startsWith("+254") && phone_no.length == 13) {
//     result = "Valid Phone number"

//   } else if (phone_no.startsWith("254") && phone_no.length == 12) {
//     result = "Valid Phone number"

//   } else if ((phone_no.startsWith("07") || phone_no.startsWith("01")) && phone_no.length == 10) {
//     result = "Valid Phone number"

//   } else if ((phone_no.startsWith("7") || phone_no.startsWith("1")) && length == 9) {
//      result = "Valid Phone number"

//   } else {
//     result = "Invalid Phone number"
//   }
//   return result

// }

// let correct_phone = validate_number(phone_number)
// console.log(correct_phone)



// Write a program that lets the user input a password.
//  Give them only 4 attempts to check the passwords entered against “admin@123”. 
//  If the password is correct access is granted. After you show them a message , the account is blocked.





function check_password() {
    let correct_password = "admin@123"
    let attempts = 4


    for (let i = 1; i <= attempts; i++) {
        let password = prompt("Enter your password")
        if (password === correct_password) {
            result ="Access granted"
            break
        } else {
             result ="Incorrect password"
            if (i === attempts) {
                result ="Attempts exceeded, account blocked"
            }
        }
    }
    return result
}

let pass = check_password()
console.log(pass)



// Write a program called stars. It should prompt the user for a number,
// and it should print the number of stars till the number entered.
// Example If rows is 5, it should print the following:
// *
// **
// ***
// ****
// *****...

let rows = parseInt(prompt("Enter a random number"))

for(let i = 1;i<= rows ;i++ ){
    let stars = ""
    for(let j= 1; j<= i; j++){
        stars += "*"
    }
   console.log(stars)
}


let x = 5
console.log(`The number above is ${x}`)




// Write a program that takes the date of birth of a person and
// the program outputs the age in terms of years,months,days TODAY.datetime

// YYYY-MM-DD

let birth_date = prompt("Enter your birth date in the format: YYYY-MM-DD")

//1997-08-24
let birthdate_parts = birth_date.split('-')
// ["1997",'08','24']

let birth_year = parseInt(birthdate_parts[0])
let birth_month = parseInt(birthdate_parts[1])
let birth_day = parseInt(birthdate_parts[2])

let current_day = 6
let current_month = 2
let current_year = 2026

let monthdays = [31,28,31,30,31,30,31,31,30,31,30,31]

//move a month behind ,borrow days for computation
if (current_day < birth_day){
    current_month-- //2- 1 = 1
    current_day += monthdays[(current_month - 1 + 12) % 12] //6 += monthdays[0] = 6 + 31 =37
}

let calculated_days = current_day - birth_day // 37 - 24 = 13d
let calculated_month
let calculated_year

//
if (current_month < birth_month){
    calculated_month = 12 - (birth_month -current_month) //12 - (8 - 1 ) = 12 -7 = 5m
    calculated_year = current_year - birth_year - 1 //2026 - 1997 - 1 = 28y
}else{
    calculated_month = current_month - birth_month
    calculated_year = current_year - birth_year
}



console.log({"calculated_year":calculated_year,"calculated_month":calculated_month, "calculated_days":calculated_days})














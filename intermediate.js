// Write a program which gets a phone number from a form input or terminal.
//  Validates the phone number by checking if it starts with +254.. or 07..
//  or 7… or 254.. or 01... or  1.. Convert the number to start with +254…
// e.g if a user enters “0712345678”, the program should display “+254712345678”
// e.g if a user enters “0112345678”, the program should display “+254112345678”
// e.g if a user enters “712345678”, the program should display “+254712345678”



let phone_number = prompt("Enter phone number");

function validate_number(phone_no) {
  if (phone_no.startsWith("+254") && phone_no.length == 13) {
    result = "Valid Phone number"

  } else if (phone_no.startsWith("254") && phone_no.length == 12) {
    result = "Valid Phone number"

  } else if ((phone_no.startsWith("07") || phone_no.startsWith("01")) && phone_no.length == 10) {
    result = "Valid Phone number"

  } else if ((phone_no.startsWith("7") || phone_no.startsWith("1")) && length == 9) {
     result = "Valid Phone number"

  } else {
    result = "Invalid Phone number"
  }
  return result
 
}

let correct_phone = validate_number(phone_number)
console.log(correct_phone)
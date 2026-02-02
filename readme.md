   INTRODUCTION TO JS
JavaScript - a programming language that interacts with the browser to create interactive and dynamic web pages

   WHAT DO WE USE IT FOR?
1.User Interactivity - how a user interacts with the web page 
                e.g. scroll, type, click , hover e.t.c
2.Reactivity - automatic loading of data without refreshing


        WHERE TO WRITE JS
1.Internal JS - writing JS in HTML inside script tags <script> </script>
        **Script in the head section**
        **Script in the body section (most common)**
2.External JS - write JS in an external JS file with a .js extension
            - this external file is then linked to html using script src
            <script src="index.js"> </script>
            - used or preferred when JS code is a lot or when a developer 
            targets organization by separating html & js 

        JS VARIABLES
->A named container used to store values or data
->A memory location used to store values
       
       VARIABLE NAMING RULES 
1.Variable names can only contain letters , digits , underscores and dollar signs 
2.Variable names can only start with letters , underscores or dollar signs
3.Variable names are case sensitive e.g X and x are 2 different variables
4.Variable names cannot be key words or reserved words


        HOW TO DECLARE VARIABLES IN JS
1.let 
    -> used when you want to reassign the value of a variable
    -> here the value can be changed or updated
    e.g let x = 10
        x = 20
2.const
    -> used when the value of a variable is meant to be a constant
    -> value remains unchanged after it's assigned
    e.g. const pi = 3.142
3.var 
    - outdated ---depracated
    - used in older versions of browsers
    - was replaced by let


        JS DATA TYPES
1.string - set of character(s) that are enclosed in ssingle or double quotes
2.Number - accounts for both whole (integers) and decimal (float) numbers
3.boolean - represents Truth values (true and false)

        OUTPUTTING IN JS
**console.log()** - inbuilt function used to output values to the console window in the browser

        CHECKING DATA TYPE IN JS
**typeof()** - returns the data type of a value

         COMMENTS
-A way of documenting code
1.Single line comments --- //
2.Multiline / Block comments */  */

        STRING METHODS
Methods - inbuilt functions used to manipulate data 
-> Most of these methods are accessed using the dot operator (.)

1.length -> checks for the no of chars in a string
2.chartAt() -> returns the character at a specified index
3.slice() -> extracts a portion of a string from the original string
        slice(start,end)
4.toUpperCase() - convert a string to uppercase format
5.toLowerCase() - convert a string to lowercase format 
6.indexOf() - returns the position of the 1st occurrence of aa char in a string
7.trim() - removes whitespaces from both sides of a string 
       trimStart() - removes whitespaces preceding the string
       trimEnd() - removes whitespaces at the end of a string
8.concat() - used in place of + to join two or more strings
9.replace() - replace one char with another
10.endswith() - checks whether a string ends with a specified char - returns Boolean
11.startswith() - checks whether a string starts with a specified char - returns Boolean 
12.includes() - a char(s) are contained in a string - returns a boolean
13.split() - splits a string into multiple substrings and stores them in an array
          - specify what to split with
14.substring() - extracts a portion of a string

TASK
Slide 53


       NUMERICAL OPERATIONS
1. Addition -> +
2. Subtraction -> -
3. Multiplication -> *
4. Division -> /
5. Exponent -> ** - power
6. Modulus -> % -> remainder after division
7. Increment -> ++ -> add by 1
8. Decrement -> -- -> reduce by 1
9. Floor ->  round down to the nearest integer
10. Ceil ->  round up to the nearest integer

+  -> numerical sum
   -> concatenation
**Polymorphism** - take more than one form
      -> Operator overloading => 
       

       CHANGING DATA TYPES
**Type conversion**
   -> Conversion of data from one type to another
   -> Done by the programmer
   
**Type coercion** 
   -> Conversion of data from one type to another
   -> Done automatically by JS



       TASK
       QUESTION ONE
1. A variable x is initialized with the value 12.
A program then executes the following arithmetic operations in order:
The value of x is increased by the result of multiplying x by 3.
From the new value of x, half of the original value of x is subtracted.
The resulting value is then divided by 4.
Finally, the program adds the remainder obtained when the original value of x is divided by 5.
What is the final value of x ?


         QUESTION TWO
2.A variable y starts with a value of 18.
The following arithmetic operations are applied sequentially:
y is reduced by one-third of its original value.
The new value of y is multiplied by 5.
From the result, the remainder when the original value of y is divided by 4 is subtracted.
Finally, the value is divided by 2, and the result is rounded down to the nearest whole number.
What is the final value of y ?



         QUESTION THREE
3.A variable z is initialized to 25.
A program performs the following arithmetic steps:
z is increased by the square of half its original value.
The new value of z is reduced by the remainder obtained when the original value of z is divided by 6.
The result is then divided by 5.
Finally, the program subtracts twice the remainder obtained when the current value of z is divided by 4.
What is the final value of z ?


                JS OPERATORS
1.Arithmetic Operators - for mathematical operations
  -> + ,-,  / ,*, ** , %, ++ , --

2.Logical Operators - perform logical operations
   **AND --> && - returns true all only if  conditions are true
   **OR --> || - returns true if at least one condition is true
   **NOT --> ! - returns the opposite of a Boolean

3.Comparison Operators  - used to compare values  - return True or False
    == -> loose equality -> allows for type coercion and then subsequently compares the value   only
    === -> strict equality -> no type coercion -> checks for both value and data type
    != -> loose inequality 
    !== -> strict inequality
    >= -> greater than or equal to
    <= -> less than or equal to
    > -> greater than
    < -> less than

4.Assignment Operators - assign values to variables
   = -> default assignment operator
   += -> add and assign
   -= -> subtract and assign
   *= -> multiply and assign
   /= -> divide and assign
   **= -> raise to a number and assign
   %= -> get the remainder and assign 


                CONDITIONAL STATEMENTS
-> These are structures that enable a program to make decisons based on some
predefined condition / rules
-> They define what happens if a condition is met or not
-> Are enforced using if-else statements
Syntax:
      if(condition){
         //if block - what happens if the condition is met
      }else{
        //else block - what happens if the condition is not met
      }

-> Multiple conditions: -> if - else if - else statements
   if(condition 1){
        //what happens if condition 1 is met
   }else if(condition 2){
        // what happens if condition 2 is met
   }else if(condition 3){
        // what happens if condition 3 is met
   }else{
        // what happens if no conditions are met
   }

      **Taking user input in JS**
-> In JS we take user input using prompt()
N/B --> any data coming from user input is always a string

      TASK
-> Slide 66
q5 ,q3 ---> review 

Leap year -> divisible by 4  but not by 100
 e.g 1800, 1700
 -> all years fully divisible by 400 are automatically leap, 1200,1600, 2000,2400


                    DATA STRUCTURES
-> programming structures used to hold or store more than one value
-> we have 2 data structures in JS:
 1.Arrays
 2.Objects

                   ARRAYS
-> A data structure that can hold more than one value at a time
-> It is equivalent to Python lists

             Properties of Arrays
1.Can hold more than one value of any data type
2.They are ordered -> arranged and accessed by index
     indexing is zero based - starts from 0
     N/B:- There is no negative indexing in JS arrays
3.They are mutable -> they can be changed or updated
4.They have methods
5. Values in arrays are comma separated
 e.g let numbers = [1,2,3,4,5]
   
          JS OPERATIONS
1.Accessing items in an array - indexing
      -> Default indexing
      -> .at() ==> allows for negative indexing
2.Updating array values - indexing
3.Determining no of items in an array - length
4..slice() - Extracting a portion of an array
         array.slice(start, end)
5.Adding items to an array
    .push() - adds items at the end of an array
    .unshift() - adds items at the begining of an array
6.Remove items from an array
     .pop() - removes the last element of an array
     .shift() - removes the first element of an array
7.Combining arrays
     .concat() - combines arrays
8.includes() - checks whether an item exists in an array and returns Boolean
9.sort() - sorts an array in alphabetical order
10.splice() - can be used to remove ,add or replace items at a specific index
        -> splice(start, delete_count, items_to_add)
11.reverse() - changes the order of items in an array [1,2,3] -> [3,2,1]
12. join() - used to combine array elements [1,2,3] -> 123
   



         TASK 
1.Conditional Statement
        A student’s final grade is determined by their exam score (an number between 0 and 100) using the rules below:
        If the score is 70 or above, the grade is A
        If the score is 60 to 69, the grade is B
        If the score is 50 to 59, the grade is C
        If the score is 40 to 49, the grade is D
        If the score is below 40, the grade is F
        Task:
        Write a JavaScript program that:
        Stores a student’s score in a variable.
        Uses if, else if, and else statements to determine the grade.
        Prints the grade to the console.


2. Array methods
   Research on the following methods and find out what they do - w3schools or geeksforgeeks
     .push()
     .unshift()
     .pop() 
     .shift() 
     .concat()
     .includes()
     .sort()

     TASK ON ARRAYS
slide 69 & 70

                OBJECTS
An object is a data structure that stores data in key -value pairs
-> Equivalent of of dictionaries in Python

          Properties of Objects
1.Store data in key value pairs
2.The keys are used to access the values
3.Keys are strings 
4.Values are of any data type
5.They are mutable
 
         Why use Objects
1.To store correlated data
2.To represent real world entities
3.To store complex structured data

e.g. let person = {
    name: "Jane Doe",
    age:25,
    address:"123 KIMATHI ST"
} ---> object

_> an object is made up of properties
property = key + value (key value pair)

let person = ["Jane Doe" ,25, "123 KIMATHI ST"]
       

        OBJECT OPERATIONS
1.Accessing values in objects
   -> there are to ways of accessing values in JS objects
    a) Dot notation
       => used only when the keys are valid identifiers (follow variable naming rules)
       => used when keys have no spaces
    b) Bracket notation
       => can access keys that have spaces


2.Object.keys() - returns all object keys in an array
3.Object.values() - returns all object values in an array
4.Object.entries() - returns all object key-value pairs in an array

    task on objects
slide 75 & 76

      NESTED ARRAYS && OBJECTS

let company = {
  name: "TechCorp",
  founded: 2010,
  location: {
    country: "Kenya",
    city: "Nairobi",
    address: {
      street: "Kenyatta Avenue",
      building: "Tech Plaza",
      floor: 5
    }
  },
  departments: [
    {
      name: "Engineering",
      head: "Alice",
      employees: [
        { id: 1, name: "John", role: "Frontend Developer", skills: ["JavaScript", "React", "CSS"] },
        { id: 2, name: "Sarah", role: "Backend Developer", skills: ["Python", "Django", "PostgreSQL"] }
      ]
    },
    {
      name: "Marketing",
      head: "Bob",
      employees: [
        { id: 3, name: "Mike", role: "SEO Specialist", skills: ["SEO", "Google Analytics", "Content Writing"] },
        { id: 4, name: "Jane", role: "Social Media Manager", skills: ["Facebook Ads", "Instagram", "Brand Strategy"] }
      ]
    }
  ],
  projects: [
    {
      title: "E-commerce Website",
      deadline: "2025-09-30",
      team: [1, 2] // Employee IDs
    },
    {
      title: "Brand Awareness Campaign",
      deadline: "2025-10-15",
      team: [3, 4]
    }
  ]
};

1. Display the following
> Instagram
> PostgreSQL
> E-commerce Website
>Tech Plaza
> 4 in team
2.Change the value of:
>Google Analytics to AWS

 

     LOOPS
-> control structures that enable a program to execute a task repeatedly until a condition is met
-> repititive structures
-> eliminates redundant work for the developer

Types of Loops
1.For Loop -> used when you have a definitive starting and ending point
            -> has the following 3 parts:
              initialization; condition; update
        **initialization** - starting point e.g printing 1 -1000 => i = 1
        **condition** - condition that keeps the loop running -> if its no longer met, loop terminates
        **update** - update the loop variable with each iteration => increment / decrement
    Syntax:
    for(let i=0 ;i<=10; i++){
        //block of code to be executed with each iteration
    }
2. While Loop -> executes as long as the condition is true

    while(condition){
      //block of code
    }

3. Do While -> execute at least once before cheking the condition


TASK 
slide 78 & 79


           JS FUNCTIONS
-> A block of code meant to perform a specific task

     Why use functions?
1.Provide reusablity of code
2.Readablity of code
3.Code Organization 
4.Modularity -  breaking code into smaller manageable pieces
5.Better debugging
    
     Variable Scopes
->determines the access level of a variable
1.Global variable - can be accessed from anywhere in your program
2.Local variable - can only be accessed within its defined scope / block

     Arguments vs Parameters
1.Argument - real values passed in place of parameters when calling a function
2.Parameter - placeholder values passed to a function when defining it

**return keyword** -> returns the result of code executed in the function and signifies the end of a function

parts of a function
1.function definition
2.function body
3.function call

syntax:
     function function_name(){
          //block of code to be executed
     }

function_name() -> function call


INTERMEDIATE TASKS
slide 80 => question 2 -> question 14

Anonymous Functions
  - explicitly lacks a function name ....the function is accessed via the declared variable
Arrow Functions

Type of functions
1.Inbuilt functions - come with the programming language with already predefined tasks e.g console.log()
2.User-defined functions - created by the programmer for tailor-made tasks.  



let x = 10
let y = 100
let sum = x + y

function add(a,b){
  return a + b
}

let sum 1 = add(10,100)
let sum 2 = add(1,2)



3,9,11,6,

Write a program which gets a phone number from a form input or terminal. Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254.. or 01... or  1.. Convert the number to start with +254… 
e.g if a user enters “0712345678”, the program should display “+254712345678”
e.g if a user enters “0112345678”, the program should display “+254112345678”
e.g if a user enters “712345678”, the program should display “+254712345678”

-> string starts with --> length

+254714056473 -> 13
714056473 -> 10
112673893 -> 10


break in loops - terminates a loop at a given point


Template literals 
 -having variables inside strings
-> here we use backticks
 let x  = 5
 console.log("The number is x")

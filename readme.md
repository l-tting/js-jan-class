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

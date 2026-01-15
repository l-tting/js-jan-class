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






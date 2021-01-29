## Part 1. Intro to Javascript ##
### Variables & Scoping ###
1. the value of `prices.length` will be printed because `i` is declared with `var`, thus it has no block scope and will be processed at the beginning of the function
2. the value of `discountedPrice` will be printed because `discountedPrice` is also  declared with `var`, thus it has no block scope and will be processed at the beginning of the function
3. the value of the `finalPrice` will be printed because `finalPrice` was declared with `var` so it will be processes in the beginning of the function
4. [50, 100, 150] because the discount of 50% is applied to each price in the array, so each price in `prices` is multiplied by 0.5
5. error because `i` is declared with `let` in a different code block than the console.log
6. error because `discountedPrice` is declared with `let` in a different code block than the console.log
7. the value of the `finalPrice` will be printed because it is declared with `let` before and in the same code block as the console.log
8. [50, 100, 150] because the discount of 50% is applied to each price in the array, so each price in `prices` is multiplied by 0.5. the return value is declared in the same block as and before the return statement so the function does not change
9. error because `i` is declared with `let`, thus it is block-scoped and not accesible outside of the for loop
10. error because `discountedPrice` is a `const`, thus it is also block-scoped inside the for loop
11. error `finalPrice` is a `const`, so it cannot be reassigned inside the for-loop, even in the same block-scope
12. error because the code tries to reassign `finalPrice`, which is a const variable, inside the for-loop
### Data Types ###
13. 
    A. `student.name`  
    B. `student["Grad Year"]`  
    C. `student.greeting()`  
    D. `student["Favorite Teacher"].name`  
    E. `student.courseLoad[1]`  
### Basic Operators & Type Conversion ###
14. Arithmetic  
    A. '32', 2 turns into a string and they are appended  
    B. 1, '3' is read as a number and 3-2=1  
    C. 3, null is equal to 0  
    D. '3null', null turns into a string  
    E. 4, true is equal to 1  
    F. 0, false and null both equal 0  
    G. '3undefined', undefined turns into a string and they are appended  
    H. NaN, undefined becomes NaN  
15. Comparison  
    A. true, '2' is converted to a number  
    B. false, '2' is lexocographically greater than '1'  
    C. true, '2' is converted to a number  
    D. false, the variables are different types (strict equality)  
    E. false, the variables are different types (strict equality)   
    F. true, Boolean(2) is true because 2 is truthy
16. `==` is for non-strict checks with type conversion, `===` is for strict equality checks without type conversion (it will return false if they are not the same price)
### Conditionals ###
17.  'How are you' gets printed. The first if is evaluated to false because 2 != 1. The else if is true because 2 is truthy and 'How are you' is printed.
### Functions ###
19. [6, 8, 10] The for-loop goes through each number in the array and calls the doSomething function on the number. Then the function(x) is called on the number and pushed to the new array.

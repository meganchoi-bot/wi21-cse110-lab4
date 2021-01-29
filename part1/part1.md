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
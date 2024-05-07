const curry = (func,arity) => {
    // function to perform currying
    return function curriedFunction(...curriedArguments) {
        if (arity === curriedArguments.length ) {
            return func(...curriedArguments)    // if the curriedArguments length is equal to the arity, function that was provided as the parameter is executed with curried arguments
        }
        else {
            return function(...newArguments) {  
                return curriedFunction(...curriedArguments, ...newArguments)    // recursively the curriedFunction is executed and new provided argument is added to the array-like object of arguments
                // 
            }
        }
    }
}
const placeholder = "_"
const curry2 = (func, arity = func.length) => {
    // second function to perform currying to allow partial application. Function also implements a placeholder symbol for missing arguments
    return function curriedFunction(...curriedArguments) {
        if (arity === curriedArguments.length && !curriedArguments.includes(placeholder)) { // in this code function also checks if the placeholder has been changed to a value before returning the provided function
            return func(...curriedArguments)    // if the curriedArguments length is equal to the arity, function that was provided as the parameter is executed with curried arguments
        }
        else {
            return function(...newArguments) { 
                let newCurriedArguments = curriedArguments.map(curriedArgument => {
                    if(curriedArgument === placeholder ) { 
                        if(newArguments.length > 0) {

                            return curriedArgument = newArguments.shift() // shifting from new arguments         
                        }
                    }
                    else {
                        return curriedArgument  // if the curriedArgument is not a placeholder return it
                    }
                    
                })
                return curriedFunction(...newArguments, ...newCurriedArguments)    // recursively the newCurriedFunction is executed and new provided argument is added to the array-like object of arguments
            }
        }
    }
}


function multiply(a, b, c) {
    return a * b * c;
}
//console.log(multiply.length)
// // const curriedMultiply = curry(multiply, 3);

// // const step1 = curriedMultiply(2); // Returns a curried function
// // const step2 = step1(3)(4); // Returns a curried function
// // //const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24

// // console.log("Result:", step2); // Expected: 24

const curried2Multiply = curry2(multiply, 3);
//console.log(curried2Multiply)
const step11 = curried2Multiply(5)(placeholder)(6)
const result = step11(2)
console.log(result)
// console.log(step1)
// const step2 = step1(3)
// //console.log(step2)
// const finalStep = step2(2)
// console.log(finalStep)

const extendCurryMultiply = curry2(multiply)

const step1 = extendCurryMultiply("_")
const step2 = step1("_")
let addMissingArgs = step2(4)
let step3 = addMissingArgs(2)
let result2 = step3(3)

console.log(result2)
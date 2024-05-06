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

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(3)(4); // Returns a curried function
//const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24

console.log("Result:", step2); // Expected: 24
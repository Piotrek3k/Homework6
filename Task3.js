const multiline = (strings, ...values) => {
    // function to add line numbers to multi-line strings
    let joinedString = ''
    strings.forEach((string, i) => { 
        // for each string in the string array the function adds the string to the result, then adds a newline symbol
        joinedString += string + (values[i] || '') 
    });
    joinedString = joinedString.trim()  // trimming to remove empty lines
    let stringsArray = joinedString.split('\n'); // splitting the string into an array
    let result = stringsArray.map((string, i) => { // adding numbers to line
        return `${i + 1} ${string}`;
    });

    return result.join('\n');  // joining whole array
}

const code = multiline`
function add(a, b) {
return a + b;
}
`;

console.log(code);
// Expected:
// "1 function add(a, b) {
//  2 return a + b;
//  3 }"


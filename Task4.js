const debounce = (func, delay) => {
    // function to debounce provided function with provided delay
    let timeoutId;  // declaring the timeoutId to clear the timeout if needed
    return function delayedFunction () {    // returning nested function with clearTimeout and debounce mechanism
        clearTimeout(timeoutId);    // clearing any existing timeout
        timeoutId = setTimeout(() => func.apply(this,arguments), delay) // executing the function after the provided delay
    }
}

function debouncedSearch(query) {
	// Perform search operation with the query
	console.log("Searching for:", query);
}
// provided example function works in browser
const debouncedSearchHandler = debounce(debouncedSearch, 300);

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
	debouncedSearchHandler(event.target.value);
});
const throttle = (func, interval) => {
    // function to throttle - to ensure that the provided funtion is executed at most once during the provided time period
    let timeoutId   // declaring the timeout
    return function () {    // returning nested function that checks if the interval between the last execution of the function has passed and if so, returns the function
        if(!timeoutId) {    // if there is no timeout execute the function in the parameter
            func.apply(this, arguments) 
            timeoutId = setTimeout( () => timeoutId = 0, interval)  // set the timeout to the value in the interval parameter
        }
    }
}

// provided example to execute in browser
function onScroll(event) {
	// Handle scroll event
	console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);
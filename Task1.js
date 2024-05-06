const localize = (strings, ...values) => {
    // function to handle multiple languages based on tagged template literals
    let result = ''
    strings.forEach((string, i) => { 
        // for each string in the string array the function adds the string to the result, then adds a space and then the word from the language dictionary
        result += string + ' ' + (translations[language][values[i]] || '')
    });
    return result
}



const translations = {
	en: {
	greet: "Hello",
	intro: "Welcome to our website"
},
	fr: {
		greet: "Bonjour",
		intro: "Bienvenue sur notre site web"
	}
};

const language = "fr"; // Change to "en" for English
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")


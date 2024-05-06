const highlightKeywords = (template, keywords) => {
    // function to wrap keywords with a <span> element with a specific CSS class
    let result = template 
    for (let i = 0; i < keywords.length; i++) {
        const regex = new RegExp(`\\$\\{${i}\\}`, 'g'); // regex for \${i} where i = index of highlight in string
        result = result.replace(regex, `<span class='highlight'>${keywords[i]}</span>`);    // if regex found in string it is replaced
    }
    return result
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
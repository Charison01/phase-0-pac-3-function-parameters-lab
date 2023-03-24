function introduction(name){
    return `Hi, my name is ${name}.`
}
//Function passing two parameters
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
//Function passing two parameters and a default parameter
function introductionWithLanguageOptional(name, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
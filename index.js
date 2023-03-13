function introduction(name) {
    return`Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, langugage) {
    return`Hi, my name is ${name} and I am learning to program in ${langugage}.`;
}

function introductionWithLanguageOptional(name, langugage = "JavaScript" ) {
    return`Hi, my name is ${name} and I am learning to program in ${langugage}.`;
    console.log(`The two values are ${langugage} and ${JavaScript}.`);
}
// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun()); 
console.log(saturdayFun("go hiking")); 

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
console.log(mondayWork()); 
console.log(mondayWork("work on a project"));
function wrapAdjective(visualFlair = "*") {
    return function(adjective = "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
}
const encouragingPromptFunction = wrapAdjective("!!!");

console.log(encouragingPromptFunction()); 
console.log(encouragingPromptFunction("amazing")); 

var readlineSync = require('readline-sync');
const chalk = require("chalk");
var score = 0;

function play (question,answer){
    var userAnswer = readlineSync.question(chalk.blueBright(question));

    if(userAnswer === answer){
        console.log(chalk.green("you were right!"));
        score++;
        console.log(chalk.yellow.underline("score :",score));
        console.log(chalk.magenta("---------------------"));
    } else{
        console.log(chalk.red("you were wrong!"));
        console.log(chalk.yellow.underline("score :",score));
        console.log(chalk.magenta("---------------------"));
    }
}

console.log(chalk.blue.bold("Welcome to Chethankumar's Quizz Zone"));
var questions = [
    {
        question : "Is HTML stands for Hyper Text Markup Language? ",
        answer : "yes",
    },
    {
        question : "Was Javascript originally called as Mocha? ",
        answer : "yes",
    },
    {
        question : "Is javascript a static language? ",
        answer : "no",
    },
    {
        question : "DOM isn't a Document Object Model? ",
        answer : "no",
    },
    {
        question : "CSS is related to styling the HTML document? ",
        answer : "yes",
    },
];

for(var i=0; i<questions.length; i++){
    var currentItem = questions[i];
    play(currentItem.question, currentItem.answer)
}
console.log(chalk.bgBlueBright("Yay! your total score is: ",score));

var highestScore = [
    {
        name : "Chikku",
        score : 5,
    },
    {
        name : "Manjunath",
        score : 4,
    },
    {
        name : "Praju",
        score : 2,
    },
];
console.log(chalk.red.bold("Highest scorere are"));
for(var i=0; i<highestScore.length; i++){
    console.log(highestScore[i].name +" : "+ highestScore[i].score);
}

console.log(chalk.yellowBright(`\n Please send the score of your screenshot,
                                        so that i will update score........`));
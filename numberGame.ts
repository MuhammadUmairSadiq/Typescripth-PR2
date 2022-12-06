#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation  from "chalk-animation"
import { clear } from "console";

var end = () => {
    return new Promise((res)=>{setTimeout(res,3000);})
}
async function starter(){
    var mix = chalkAnimation.rainbow(`

                    |----------------------------------------------------|
                    |----------------GUESSING A NUMBER GAME--------------| 
                    |----------------------------------------------------|           
    `)
    await end();
    mix.stop();
}
await starter()

function NewM(){
    console.log(chalk.greenBright.bold.italic("                 Newbie Mode: "))
    console.log(`                             => Unlimited Numbers of Tries.
                             => Hint on Each Wrong Guess.
                             => Numbers remains same on Wrong Guess.
                             => Press 0 for End the Game.
`)
}
function BegM() {
    console.log(chalk.greenBright.bold.italic("                 Beginner Mode: "))
    console.log(`                             => Limited (10) Numbers of tries.
                             => Hint on Each Wrong Guess.
                             => Number remains same on Wrong Guess.
                             => Press 0 for End the Game.
`)
}
function ProM() {
    console.log(chalk.greenBright.bold.italic("                 Proficient Mode: "))
    console.log(`                             => Limited (8) Numbers of tries.
                             => No Hint on Wrong Guess.
                             => Number remains same on Wrong Guess.
                             => Press 0 for End the Game.
`)
}
function ExpM() {
    console.log(chalk.greenBright.bold.italic("                 Expert Mode: "))
    console.log(`                             => Limited (5) Numbers of tries.
                             => No Hint on Wrong Guess.
                             => Number changed on Wrong Guess.
                             => Press 0 for End the Game.
`)
}
console.log(chalk.blueBright.bold.italic("How to play: "))
    console.log(`           => A Random Number between 1 to 20 will be Genrated.
           => To Win Guess the Number.
           => You Can Play in Following Modes.
`)
console.log(chalk.blueBright.bold.italic("Difficulty Levels: "))
    NewM();
    BegM();
    ProM();
    ExpM();

async function question() {
    var ans = await inquirer
.prompt([
    {
        type:"list",
        name : "choice",
        message:"Which Mode you want to Play??",
        choices:["Newbie Mode","Beginner Mode","Proficient Mode","Expert Mode"]
    }
])
if(ans.choice == "Newbie Mode"){
    clear();
    console.log(`
    
    `)
    console.log(chalk.blueBright.bold.italic("   Selected Mode: "))
    NewM();
    let randNum = Math.trunc(Math.random() * (20 - 2 + 1) + 2);
    var i=0;
    while(true){
        var guessNumber = await inquirer
        .prompt([
            {
                type:"number",
                name:"number",
                message:"Enter your Number Here:"
            }
        ])
        i++;
        if(guessNumber.number ==0){
            console.log(chalk.redBright.italic(`  Oops!You End the Game after ${i} tries.`))
            break;
        }
        else {
            if(randNum == guessNumber.number) {
                console.log(chalk.greenBright.italic(`  Congratulations!! You Guess the Correct Number in ${i} tries.`))
                break;
            }
            
            if(guessNumber.number < randNum) {
                console.log(chalk.redBright.italic("  Guess a Higher Number."))
            }
            else {
                console.log(chalk.redBright.italic("  Guess a Lower Number."))
            }
        }
    }
}
else if(ans.choice == "Beginner Mode"){
    clear();
    console.log(`
    
    `)
    console.log(chalk.blueBright.bold.italic("   Selected Mode: "))
    BegM();
    let randNum = Math.trunc(Math.random() * (20 - 2 + 1) + 2);
    var i=0; 
    while(i < 10){
        var guessNumber = await inquirer
        .prompt([
            {
                type:"number",
                name:"number",
                message:"Enter your Number Here:"
            }
        ])
        i++;
        if(guessNumber.number ==0){
            console.log(chalk.redBright.italic(`  Oops!You End the Game after ${i} tries.`))
            break;
        }
        else {
            if(randNum == guessNumber.number) {
                console.log(chalk.greenBright.italic(`  Congratulations!! You Guess the Correct Number in ${i} tries.`))
                break;
            }
            
            if(guessNumber.number < randNum) {
                console.log(chalk.redBright.italic("  Guess a Higher Number."))
            }
            else {
                console.log(chalk.redBright.italic("  Guess a Lower Number."))
            }
        }
    }
    if(i>=10){
        console.log(chalk.redBright.italic.bold(`  You are Failed to Guess the Right Number.Number is ${randNum}`))
    }
}
else if(ans.choice == "Proficient Mode"){
    clear();
    console.log(`

    `)
    console.log(chalk.blueBright.bold.italic("   Selected Mode: "))
    ProM();
    let randNum = Math.trunc(Math.random() * (20 - 2 + 1) + 2);
    var i=0; 
    while(i < 8){
        var guessNumber = await inquirer
        .prompt([
            {
                type:"number",
                name:"number",
                message:"Enter your Number Here:"
            }
        ])
        i++;
        if(guessNumber.number ==0){
            console.log(chalk.redBright.italic(`  Oops!You End the Game after ${i} tries.`))
            break;
        }
        else {
            if(randNum == guessNumber.number) {
                console.log(chalk.greenBright.italic(`  Congratulations!! You Guess the Correct Number in ${i} tries.`))
                break;
            }
            
            if(guessNumber.number < randNum) {
                console.log(chalk.redBright.italic("  Guess a Higher Number."))
            }
            else {
                console.log(chalk.redBright.italic("  Guess a Lower Number."))
            }
        }
    }
    if(i>=8){
        console.log(chalk.redBright.bold.italic(`  You are Failed to Guess the Right Number.Number is ${randNum}`))
    }
}
else  if(ans.choice == "Expert Mode"){
    clear();
    console.log(`

    `)
    console.log(chalk.blueBright.bold.italic("   Selected Mode: "))
    ExpM();
    var i=0; 
    while(i < 5){
        let randNum = Math.trunc(Math.random() * (20 - 2 + 1) + 2);
        var guessNumber = await inquirer
        .prompt([
            {
                type:"number",
                name:"number",
                message:"Enter your Number Here:"
            }
        ])
        i++;
        if(guessNumber.number ==0){
            console.log(chalk.redBright.italic(`  Oops!You End the Game after ${i} tries.`))
            break;
        }
        else {
            if(randNum == guessNumber.number) {
                console.log(chalk.greenBright.italic(`  Congratulations!! You Guess the Correct Number in ${i} tries.`))
                break;
            }
            console.log(chalk.redBright.italic(`  Number is ${randNum}.`))
        }
    }
    if(i>=5){
        console.log(chalk.redBright.bold.italic(`  You are Failed to Guess the Right Number.`))
    }
}

}

async function Exit() {
    while(1) {
        await question();
        var check = await inquirer
        .prompt ([
            {
                type:"list",
                name:"flag",
                message:chalk.cyan("Would You Like To Continue??"),
                choices:["Yes","No"]
            }
        ])
        if(check.flag == "No") { 
            var mix = chalkAnimation.pulse(`
     
    |***************************************************************************************************|
    |*********************************THANKS FOR PLAYING THE GAME***************************************|
    |***************************************************************************************************|
    |************************************DEVELOPED BY UMAIR*********************************************|
    `)
            await end();
            mix.stop();
            break; 
        }
        clear();
    }
} 

Exit();
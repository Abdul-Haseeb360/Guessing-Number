#! /usr/bin/env node 

import inquirer from "inquirer";

var randomNumber = Math.floor(Math.random()*5 + 1);



const answer = await inquirer.prompt([
  {
    name: "UserGuessNumber",
    type: "number",
    message: "Please guess a number Between 1-5",
  },
]);

if (answer.UserGuessNumber == randomNumber) {
  console.log("Congratulain! you guessed correct number");
} else {
  console.log("Sorry you guessed a Wrong number");
}

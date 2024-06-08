#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome To \`Munazzah rao calculator`\ - CLI SIMPLE CALCULATOR\n");
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "Number", name: "firstNumber" },
    { message: "Enter second number", type: "Number", name: "secondNumber" },
    {
        message: "Select one of the oprators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invelid input");
}
;

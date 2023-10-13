#! usr/bin/env node;
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly enter your ID",
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly enter your PIN",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current Account", "Saving Account"],
        message: "Select your account type: ",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdrawl"],
        message: "Select your Transaction: ",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "withdraw",
        choices: [1000, 2000, 5000, 10000, 20000],
        message: "Select your amount: ",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount: ",
        when(answers) {
            return answers.transactionType == "Withdrawl";
        },
    }
]);
console.log(answers);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 100000);
    console.log(balance);
    const enterdAmount = answers.amount;
    if (balance >= enterdAmount) {
        const remaining = balance - enterdAmount;
        console.log("Your remainig balance is:", remaining);
    }
    else {
        console.log("Insuficient Balance");
    }
}

#!/usr/bin/env node

const inquirer = require("inquirer");
const cfonts = require("cfonts");
const opn = require("opn");

const actions = {
  Twitter() {
    opn("https://twitter.com/maykbrito");
  },
  YouTube() {
    opn("https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg/search?query=Mayk+Brito");
  },
  GitHub() {
    opn("https://github.com/maykbrito");
  },
  Quit() {
    cfonts.say("THANKS", {
      font: "chrome",
      colors: ["green", "green", "green"]
    });

    process.exit();
  }
};

cfonts.say("Mayk Brito", {
  font: "chrome",
  colors: ["#fd951f", "white", "#fd951f"]
});

console.log(`Greetings, my name is Mayk Brito.
I am a web developer instructor that see as my purpose
help new developers to increase theirs skills
`);

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "Where would you like to go?",
      choices: [
        "Twitter",
        "YouTube",
        "GitHub",
        "Quit"
      ]
    }
  ])
  .then(answers => {
    actions[answers.choice]();    
    actions.Quit();
  });

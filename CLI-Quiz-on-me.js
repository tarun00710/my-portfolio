var readline = require('readline-sync');
const chalk = require("chalk");

var userName = readline.question(chalk.bold.cyan("Enter your name-->> "));
console.log(chalk.bgYellowBright.black("----Welcome to Quiz and check how much do you know me----"));
var questions=[
{
  question:`What is my hobby?
  a.gaming
  b.coding
  c.dancing
  `,
  answer:"b"
},
{
  question:`Which is my favorite south indian food?
  a.dosa
  b.vada
  c.idli
  `,
  answer:"a"
},
{
  question:`What is my favorite fruit?
  a.orange
  b.strawberry
  c.grapes
  `,
  answer:"c"
},
{
  question:`When is my birthday?
  a.August
  b.June
  c.September
  `,
  answer:"a"
},
{
  question:`What is my favorite outdoor game
  a.Cricket
  b.Badminton
  c.Football
  `,
  answer:"b"
},
]
var score=0;
function play(question,answer){
  var userAnswer=readline.question(chalk.blueBright.bold(question));
  if(userAnswer.toLowerCase()==answer){
    score++;
    console.log(chalk.green("Correct"));
    console.log(chalk.redBright("Your current Score is:"+score));
  }
  else
  {
    console.log(chalk.red("Wrong"));
    console.log("Your current Score is:"+score);
  }
}

for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
}
console.log(chalk.magentaBright("........Your final Score is= "+score+" out of "+questions.length+"..........."));

var personScore=[{
  name:"Tarun",
  scored:3
},
{
 name:"Anand",
 scored:2
}
]
personScore.push({name:userName,scored:score});

personScore.sort(function( a , b){
    if(a.scored > b.scored) return -1;
    if(a.scored < b.scored) return 1;
    return 0;
});
if(userName===personScore[0].name)
console.log(chalk.bold.bgGreenBright("*****You have new highscore*****"));

  console.log("________________")
  console.log(chalk.grey("---Score Board---"));
for(var i=0;i<personScore.length;i++){
  console.log(chalk.blueBright(personScore[i].name+" --"+personScore[i].scored));
}




var readline = require("readline-sync");
const chalk = require("chalk");



var userName = readline.question(chalk.bold.cyanBright("Enter your name-->> "));
console.log(chalk.bgYellowBright.black("----Welcome to Quiz on Nutrition and Health----"));
var questions=[
{
  question:`What is a measure of the energy you get from food?
  a.fiber
  b.Calorie
  c.Carbohydrate
  `,
  answer:"b"
},
{
  question:`Which vitamin is important to eyesight?
  a.vitamin A
  b.vitamin B
  c.vitamin D
  `,
  answer:"a"
},
{
  question:`What mineral is found in dairy products and helps build strong bone?
  a.Zinc
  b.Copper
  c.Calcium
  `,
  answer:"c"
},
{
  question:` Having iodized salt regularly in your food will help in the prevention of __________.
  a.Goitre
  b.Anaemia
  c.Ricket
  `,
  answer:"a"
},
{
  question:`What measure can be used to determine if a person's weight is healthy?
  a.Exercise
  b.Body Mass Index
  c.Calorie
  `,
  answer:"b"
},
{
  question:`Which vitamin is found in oranges and helps prevent colds?
  a.vitamin A
  b.vitamin B
  c.vitamin C
  `
  ,
  answer:"c"
}
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
}]

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
  console.log(chalk.yellow(personScore[i].name+" --"+personScore[i].scored));
}




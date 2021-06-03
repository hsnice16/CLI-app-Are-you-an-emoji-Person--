console.clear();

const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bold.green('\t\t -------- Are you an emoji person? --------  '));
console.log(`\n\n -- ${chalk.bold.white('If Yes! then answer these 10 questions and test yourself.')} -- \n\n`);

console.log(`\n\n ${chalk.red.bold('Write the name of every emoji and if the name contains two words then separate them with space.')} \n\n`);

var score = 0;

const questionBank = [
  {
    question: 'Which face is this 😀 ?',
    answer: 'grinning face',
  },
  {
    question: 'What do we call this 🦋 ?',
    answer: 'butterfly',
  },
  {
    question: 'Do you know it 🥧 ?',
    answer: 'pie',
  },
  {
    question: 'What is this 🥏 ?',
    answer: 'flying disc',
  },
  {
    question: 'Do you know it 🚀 ?',
    answer: 'rocket',
  },
  {
    question: 'What do we call this 💡 ?',
    answer: 'light bulb',
  },
  {
    question: 'Do you know it 💥 ?',
    answer: 'collision',
  },
  {
    question: 'Who is this 👺 ?',
    answer: 'goblin',
  },
  {
    question: 'What is this 🔥 ?',
    answer: 'fire',
  },
  {
    question: 'What do we call it 👍 ?',
    answer: 'thumbs up',
  },
]

function play({question, answer}) {
  const userAnswer = readlineSync.question(`${question}\t`).toLowerCase();

  if (userAnswer === answer) {
    score++;
    console.log(`\n${chalk.green.bold(`Current Score: ${score}`)}\n`);
  } else {
    console.log(`\n${chalk.bgRed.white.bold('  WRONG  ')}\n`);
  }
}

for(let val = 0; val < questionBank.length; val++) {
  console.log(chalk.bold.blue(`Q${val+1}.\n`))
  play(questionBank[val]);
  console.log('\n');
}

console.log(`\n\n${chalk.bgWhite.black.bold(`You are a ${chalk.red.bold((score*100)/10)}% emoji person.`)} \n\n`);
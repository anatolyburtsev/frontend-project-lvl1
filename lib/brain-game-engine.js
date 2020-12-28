import readlineSync from 'readline-sync';
import initGame from '../bin/cli.js';

const readAnswerOnQuestion = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const getFinalMessage = (isWin, name) => {
  if (isWin) {
    return `Congratulations, ${name}!`;
  }
  return `Let's try again, ${name}!`;
};

const buildGame = (gameDescription, createNewTask, rounds = 3) => {
  const { name } = initGame();

  console.log(gameDescription);
  let isWin = true;
  for (let attempt = 0; attempt < rounds; attempt += 1) {
    const { question, answer: expectedAnswer } = createNewTask();
    const answer = readAnswerOnQuestion(question);

    if (answer !== expectedAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      isWin = false;
      break;
    } else {
      console.log('Correct');
    }
  }
  console.log(getFinalMessage(isWin, name));
};

export default buildGame;

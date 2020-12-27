import readlineSync from 'readline-sync';
import { getRandomNumber, isEven } from './helpers.js';

const getAnswer = () => readlineSync.question('Your answer: ');
const getName = () => readlineSync.question('May I have your name? ');

const getFinalMessage = (isWin, name) => {
  if (isWin) {
    return `Congratulations, ${name}!`;
  }
  return `Let's try again, ${name}!`;
};

const startGame = (correctGuessesNumberToWin) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let isWin = true;
  for (let attempt = 0; attempt < correctGuessesNumberToWin; attempt += 1) {
    const number = getRandomNumber();
    const expectedAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = getAnswer();

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

export default startGame;

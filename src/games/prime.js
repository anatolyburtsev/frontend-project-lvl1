import buildGame from '../engine.js';
import { generateRandomNumber } from '../utils.js';

const isPrime = (number) => {
  if (number < 2) return false;
  const maxPossibleDividerValue = Math.floor(Math.sqrt(number)) + 1;
  for (let i = 2; i < maxPossibleDividerValue; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const startGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const createNewTask = () => {
    const number = generateRandomNumber(2, 100);
    const answer = isPrime(number) ? 'yes' : 'no';
    return {
      question: `${number}`,
      answer,
    };
  };
  return buildGame(description, createNewTask);
};

export default startGame;

import buildGame from '../brain_game_skeleton.js';
import generateRandomNumber from '../helpers.js';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number; i += 1) {
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

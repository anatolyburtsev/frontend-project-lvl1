import build from '../engine.js';
import utils from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generateRound = () => {
  const minValue = 2;
  const maxValue = 100;
  const number = utils.generateRandomNumber(minValue, maxValue);
  const answer = isPrime(number) ? 'yes' : 'no';
  return {
    question: `${number}`,
    answer,
  };
};

const start = () => build(description, generateRound);

export default start;

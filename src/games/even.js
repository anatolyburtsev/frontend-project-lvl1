import build from '../engine.js';
import utils from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const generateRound = () => {
  const minValue = 3;
  const maxValue = 100;
  const number = utils.generateRandomNumber(minValue, maxValue);
  return {
    question: number,
    answer: isEven(number) ? 'yes' : 'no',
  };
};

const start = () => build(description, generateRound);

export default start;

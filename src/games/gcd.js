import build from '../engine.js';
import utils from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (a, b) => {
  if (a === 0) return b;
  return calculateGcd(b % a, a);
};

const generateRound = () => {
  const minValue = 3;
  const maxValue = 100;
  const number1 = utils.generateRandomNumber(minValue, maxValue);
  const number2 = utils.generateRandomNumber(minValue, maxValue);
  const gcd = calculateGcd(number1, number2);
  return {
    question: `${number1} ${number2}`,
    answer: gcd.toString(),
  };
};

const start = () => build(description, generateRound);

export default start;

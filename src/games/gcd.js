import buildGame from '../brain-game-engine.js';
import generateRandomNumber from '../helpers.js';

const calculateGcd = (x, y) => {
  let [a, b] = [x, y];
  while (a !== b) {
    if (a > b) {
      [a, b] = [b, a - b];
    } else {
      [a, b] = [b - a, a];
    }
  }
  return a;
};

const startGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const createNewTask = () => {
    const minValue = 3;
    const maxValue = 100;
    const number1 = generateRandomNumber(minValue, maxValue);
    const number2 = generateRandomNumber(minValue, maxValue);
    const gcd = calculateGcd(number1, number2);
    return {
      question: `${number1} ${number2}`,
      answer: gcd.toString(),
    };
  };
  return buildGame(description, createNewTask);
};

export default startGame;

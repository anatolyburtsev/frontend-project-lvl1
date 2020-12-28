import buildGame from '../brain_game_skeleton.js';
import generateRandomNumber from '../helpers.js';

const calcGcd = (x, y) => {
  let [a, b] = [x, y];
  while (a !== b) {
    if (a > b) {
      [a, b] = [a - b, a];
    } else {
      [a, b] = [b - a, a];
    }
  }
  return a;
};

const startGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const createNewTask = () => {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();
    const gcd = calcGcd(number1, number2);
    return {
      question: `${number1} ${number2}`,
      answer: gcd.toString(),
    };
  };
  return buildGame(description, createNewTask);
};

export default startGame;

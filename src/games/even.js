import build from '../engine.js';
import utils from '../utils.js';

const isEven = (n) => n % 2 === 0;

const startGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const createNewTask = () => {
    const number = utils.generateRandomNumber(3, 100);
    return {
      question: number,
      answer: isEven(number) ? 'yes' : 'no',
    };
  };
  return build(description, createNewTask);
};

export default startGame;

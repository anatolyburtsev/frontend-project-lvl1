import buildGame from '../brain-game-engine.js';
import generateRandomNumber from '../helpers.js';

const isEven = (n) => n % 2 === 0;

const startGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const createNewTask = () => {
    const number = generateRandomNumber(3, 100);
    return {
      question: number,
      answer: isEven(number) ? 'yes' : 'no',
    };
  };
  return buildGame(description, createNewTask);
};

export default startGame;

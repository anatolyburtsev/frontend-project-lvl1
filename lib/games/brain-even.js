import buildGame from '../brain_game_skeleton.js';
import generateRandomNumber from '../helpers.js';

const NUMBER_CORRECT_ANSWERS_TO_WIN = 3;

const isEven = (n) => n % 2 === 0;

const startGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const createNewTask = () => {
    const number = generateRandomNumber();
    return {
      question: number,
      answer: isEven(number) ? 'yes' : 'no',
    };
  };
  return buildGame(description, createNewTask, NUMBER_CORRECT_ANSWERS_TO_WIN);
};

export default startGame;
import buildGame from '../brain_game_skeleton.js';
import generateRandomNumber from '../helpers.js';

const startGame = () => {
  const description = 'What number is missing in the progression?';
  const createNewTask = () => {
    const initialValue = generateRandomNumber();
    const step = generateRandomNumber(1, 5);
    const count = generateRandomNumber(7, 12);
    const values = [];
    for (let i = 0; i < count; i += 1) {
      values.push(initialValue + step * i);
    }
    const missingValueIdx = generateRandomNumber(0, values.length);
    const missingValue = values[missingValueIdx];
    values[missingValueIdx] = '..';
    return {
      question: values.join(' '),
      answer: missingValue.toString(),
    };
  };
  return buildGame(description, createNewTask);
};

export default startGame;

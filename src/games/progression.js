import buildGame from '../brain-game-engine.js';
import generateRandomNumber, { pickRandom } from '../helpers.js';

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
    const { index: missingValueIdx, value: missingValue } = pickRandom(values);
    values[missingValueIdx] = '..';
    return {
      question: values.join(' '),
      answer: missingValue.toString(),
    };
  };
  return buildGame(description, createNewTask);
};

export default startGame;

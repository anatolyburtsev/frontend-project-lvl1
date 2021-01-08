import buildGame from '../engine.js';
import { generateRandomNumber, pickRandomItem } from '../utils.js';

const startGame = () => {
  const description = 'What number is missing in the progression?';
  const createNewTask = () => {
    const initialValue = generateRandomNumber(3, 20);
    const step = generateRandomNumber(1, 5);
    const count = generateRandomNumber(7, 12);
    const values = [];
    for (let i = 0; i < count; i += 1) {
      values.push(initialValue + step * i);
    }
    const { index: indexToDrop, value: valueToDrop } = pickRandomItem(values);
    values[indexToDrop] = '..';
    return {
      question: values.join(' '),
      answer: valueToDrop.toString(),
    };
  };
  return buildGame(description, createNewTask);
};

export default startGame;

import build from '../engine.js';
import utils from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (initialValue, step, progressionLength) => {
  const values = [];
  for (let i = 0; i < progressionLength; i += 1) {
    values.push(initialValue + step * i);
  }
  return values;
};

const generateRound = () => {
  const initialValue = utils.generateRandomNumber(3, 20);
  const step = utils.generateRandomNumber(1, 5);
  const progressionLength = utils.generateRandomNumber(7, 12);
  const values = generateProgression(initialValue, step, progressionLength);
  const { index: indexToDrop, value: valueToDrop } = utils.pickRandomItem(
    values,
  );
  return {
    question: values
      .map((val, idx) => (idx === indexToDrop ? '..' : val))
      .join(' '),
    answer: valueToDrop.toString(),
  };
};

const start = () => build(description, generateRound);

export default start;

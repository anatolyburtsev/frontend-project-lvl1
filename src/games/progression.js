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
  const minInitialValue = 3;
  const maxInitialValue = 20;
  const minStep = 1;
  const maxStep = 5;
  const minProgressionLength = 7;
  const maxProgressionLength = 12;

  const initialValue = utils.generateRandomNumber(
    minInitialValue,
    maxInitialValue,
  );
  const step = utils.generateRandomNumber(minStep, maxStep);
  const progressionLength = utils.generateRandomNumber(
    minProgressionLength,
    maxProgressionLength,
  );
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

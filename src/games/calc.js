import build from '../engine.js';
import utils from '../utils.js';

const description = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateRound = () => {
  const minValue = 2;
  const maxValue = 20;
  const number1 = utils.generateRandomNumber(minValue, maxValue);
  const number2 = utils.generateRandomNumber(minValue, maxValue);
  const operationSign = utils.pickRandomItem(Object.keys(operations)).value;
  const answer = operations[operationSign](number1, number2);
  return {
    question: `${number1} ${operationSign} ${number2}`,
    answer: answer.toString(),
  };
};

const start = () => build(description, generateRound);

export default start;

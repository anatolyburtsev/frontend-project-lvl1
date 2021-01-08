import buildGame from '../engine.js';
import utils from '../utils.js';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const startGame = () => {
  const description = 'What is the result of the expression?';
  const createNewTask = () => {
    const minValue = 2;
    const maxValue = 20;
    const number1 = utils.generateRandomNumber(minValue, maxValue);
    const number2 = utils.generateRandomNumber(minValue, maxValue);
    const opSign = utils.pickRandomItem(Object.keys(operations)).value;
    const answer = operations[opSign](number1, number2);
    return {
      question: `${number1} ${opSign} ${number2}`,
      answer: answer.toString(),
    };
  };
  return buildGame(description, createNewTask);
};

export default startGame;

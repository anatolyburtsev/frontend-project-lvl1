import buildGame from '../brain-game-engine.js';
import generateRandomNumber from '../helpers.js';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const startGame = () => {
  const description = 'What is the result of the expression?';
  const createNewTask = () => {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();
    const opNumber = generateRandomNumber(0, Object.keys(operations).length - 1);
    const operation = Object.keys(operations)[opNumber];
    const answer = operations[operation](number1, number2);
    return {
      question: `${number1} ${operation} ${number2}`,
      answer: answer.toString(),
    };
  };
  return buildGame(description, createNewTask);
};

export default startGame;
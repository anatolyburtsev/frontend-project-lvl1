import buildGame from '../brain-game-engine.js';
import generateRandomNumber, { pickRandom } from '../helpers.js';

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
    const opSign = pickRandom(Object.keys(operations)).value;
    const answer = operations[opSign](number1, number2);
    return {
      question: `${number1} ${opSign} ${number2}`,
      answer: answer.toString(),
    };
  };
  return buildGame(description, createNewTask);
};

export default startGame;

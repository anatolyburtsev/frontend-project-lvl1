import readlineSync from 'readline-sync';

const buildGame = (gameDescription, createNewTask, rounds = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  console.log(gameDescription);
  let isWin = true;
  for (let attempt = 0; attempt < rounds; attempt += 1) {
    const { question, answer: correctAnswer } = createNewTask();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      isWin = false;
      break;
    } else {
      console.log('Correct');
    }
  }
  if (isWin) {
    console.log(`Congratulations, ${name}!`);
  }
  console.log(`Let's try again, ${name}!`);
};

export default buildGame;

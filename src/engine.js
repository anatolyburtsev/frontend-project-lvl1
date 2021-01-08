import readlineSync from 'readline-sync';

const playRound = (task) => {
  const { question, answer: correctAnswer } = task;
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer !== correctAnswer) {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    return false;
  }
  console.log('Correct');
  return true;
};

const buildGame = (gameDescription, createNewTask, rounds = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  console.log(gameDescription);
  for (let attempt = 0; attempt < rounds; attempt += 1) {
    const isSuccessfullRound = playRound(createNewTask());

    if (!isSuccessfullRound) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default buildGame;

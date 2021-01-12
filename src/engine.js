import readlineSync from 'readline-sync';

const build = (description, generateRound, roundCount = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  console.log(description);
  for (let attempt = 0; attempt < roundCount; attempt += 1) {
    const { question, answer: correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default build;

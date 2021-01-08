const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const pickRandomItem = (arr) => {
  const index = generateRandomNumber(0, arr.length - 1);
  const value = arr[index];
  return { index, value };
};

export default { generateRandomNumber, pickRandomItem };

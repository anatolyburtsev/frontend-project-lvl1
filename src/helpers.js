const generateRandomNumber = (minNumber, maxNumber) => {
  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber) + 1;
  return Math.floor(Math.random() * (max - min) + min);
};

export const pickRandom = (arr) => {
  const index = generateRandomNumber(0, arr.length - 1);
  const value = arr[index];
  return { index, value };
};

export default generateRandomNumber;

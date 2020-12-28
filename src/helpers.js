const generateRandomNumber = (minNumber = 2, maxNumber = 20) => {
  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);
  return Math.floor(Math.random() * (max - min) + min);
};

export default generateRandomNumber;

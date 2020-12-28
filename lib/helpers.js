const generateRandomNumber = (minNumber = 2, maxNumber = 20) => {
  const randomValue = Math.floor(Math.random() * maxNumber);
  return minNumber + randomValue;
};

export default generateRandomNumber;

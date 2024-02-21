import getRandomNum from './utils.js';
import runGame from './index.js';

const gameDescription5 = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstValue, secondValue) => {
  if (!secondValue) {
    return firstValue;
  }
  return getGcd(secondValue, firstValue % secondValue);
};

const getGame = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const question1 = `${num1} ${num2}`;
  const correctAns = getGcd(num1, num2).toString();

  return [question1, correctAns];
};

const startGCD = () => runGame(gameDescription5, getGame);

export default startGCD;

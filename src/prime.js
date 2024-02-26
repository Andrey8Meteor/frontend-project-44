import runGame from './index.js';
import getRandomNum from './utils.js';

const gameDescription07 = 'Answer "yes" if given number is prime. Otherwise answer "no" ';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const getGamePrime = () => {
  const randomNumber = getRandomNum(1, 100);
  const correctAnswers = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswers];
};

const gamePrime = () => runGame(gameDescription07, getGamePrime);

export default gamePrime;

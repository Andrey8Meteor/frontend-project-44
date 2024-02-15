import getRandomNum from './utils.js';
import runGame from './index.js';

const gameDescription1 = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData1 = () => {
  const randomNumber = getRandomNum(1, 100);
  const correctAnswer1 = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer1];
};

const startGame = () => runGame(gameDescription1, getGameData1);

export default startGame;

import takeAChance from './take-a-chance.js';

const promise = takeAChance('Jack');

promise
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log(e.message);
  });

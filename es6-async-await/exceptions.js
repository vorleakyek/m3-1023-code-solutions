import read from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

// function throwOnce() {
//   // Note: In the `catch` we are logging just `error.message` for illustration
//   // purposes. In actual code you will want to log the entire error so that
//   // you get the stack trace.
//   return read('foo', false)
//     .then((msg) => console.log(elapsed(), 'throwOnce:', msg))
//     .catch((error) =>
//       console.log(elapsed(), 'throwOnce Error:', error.message)
//     );
// }

// function throwSeveral() {
//   // Note: In the `catch` we are logging just `error.message` for illustration
//   // purposes. In actual code you will want to log `error` so that
//   // you get the stack trace.
//   return read('foo1', false)
//     .then((msg) => {
//       console.log(elapsed(), 'throwSeveral1:', msg);
//       return read('foo2', false);
//     })
//     .then((msg) => {
//       console.log(elapsed(), 'throwSeveral2:', msg);
//       return read('foo3', false);
//     })
//     .then((msg) => console.log(elapsed(), 'throwSeveral3:', msg))
//     .catch((error) =>
//       console.log(elapsed(), 'throwSeveral Error:', error.message)
//     );
// }

// function throwChained() {
//   return read('foo-chain', false)
//     .then((msg1) => {
//       console.log(elapsed(), 'throwChained1:', msg1);
//       return read(msg1, false);
//     })
//     .then((msg2) => {
//       console.log(elapsed(), 'throwChained2:', msg2);
//       return read(msg2, false);
//     })
//     .then((msg3) => console.log(elapsed(), 'throwChained3:', msg3))
//     .catch((error) =>
//       console.log(elapsed(), 'throwChained Error:', error.message)
//     );
// }

// throwOnce()
//   .then(() => throwSeveral())
//   .then(() => throwChained());

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  try {
    const data = await read('foo', false);
    console.log(elapsed(), 'throwOnce:', data);
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error.message);
  }
}

async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  try {
    const data = await read('foo1', false);
    console.log(elapsed(), 'throwSeveral1:', data);
    const data2 = await read('foo2', false);
    console.log(elapsed(), 'throwSeveral2:', data2);
    const data3 = await read('foo3', false);
    console.log(elapsed(), 'throwSeveral2:', data3);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error.message);
  }
}

async function throwChained() {
  try {
    const data = await read('foo-chain', false);
    console.log(elapsed(), 'throwChained1:', data);
    const data1 = await read(data, false);
    console.log(elapsed(), 'throwChained2:', data1);
    const data2 = await read(data1, false);
    console.log(elapsed(), 'throwChained2:', data2);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error.message);
  }
}

async function execute() {
  await throwOnce();
  await throwSeveral();
  await throwChained();
}

execute();

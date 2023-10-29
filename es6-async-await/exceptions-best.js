import read from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  const data = await read('foo', false);
  console.log(elapsed(), 'throwOnce:', data);
}

async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  const data = await read('foo1', false);
  console.log(elapsed(), 'throwSeveral1:', data);
  const data2 = await read('foo2', false);
  console.log(elapsed(), 'throwSeveral2:', data2);
  const data3 = await read('foo3', false);
  console.log(elapsed(), 'throwSeveral2:', data3);
}

async function throwChained() {
  const data = await read('foo-chain', false);
  console.log(elapsed(), 'throwChained1:', data);
  const data1 = await read(data, false);
  console.log(elapsed(), 'throwChained2:', data1);
  const data2 = await read(data1, false);
  console.log(elapsed(), 'throwChained2:', data2);
}

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.log(elapsed(), 'Error:', error.message);
}

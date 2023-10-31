import read from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

// function readOnce() {
//   return read('foo/bar.html').then((msg) =>
//     console.log(elapsed(), 'readOnce:', msg)
//   );
// }

// function readSeveral() {
//   return read('foo1/bar.html')
//     .then((msg) => {
//       console.log(elapsed(), 'readSeveral1:', msg);
//       return read('foo2/bar.html');
//     })
//     .then((msg) => {
//       console.log(elapsed(), 'readSeveral2:', msg);
//       return read('foo3/bar.html');
//     })
//     .then((msg) => console.log(elapsed(), 'readSeveral3:', msg));
// }

// function readChained() {
//   return read('foo-chain/bar.html')
//     .then((msg1) => {
//       console.log(elapsed(), 'readChained1:', msg1);
//       return read(msg1);
//     })
//     .then((msg2) => {
//       console.log(elapsed(), 'readChained2:', msg2);
//       return read(msg2);
//     })
//     .then((msg3) => console.log(elapsed(), 'readChained3:', msg3));
// }

// readOnce()
//   .then(() => readSeveral())
//   .then(() => readChained());

async function readOnce() {
  const data = await read('foo/bar.html');
  console.log(elapsed(), 'readOnce:', data);
}

async function readSeveral() {
  const data = await read('foo1/bar.html');
  console.log(elapsed(), 'readSeveral1:', data);
  const data2 = await read('foo2/bar.html');
  console.log(elapsed(), 'readSeveral2:', data2);
  const data3 = await read('foo3/bar.html');
  console.log(elapsed(), 'readSeveral3:', data3);
}

async function readChained() {
  const data = await read('foo-chain/bar.html');
  console.log(elapsed(), 'readChained1:', data);
  const data1 = await read(data);
  console.log(elapsed(), 'readChained2:', data1);
  const data2 = await read(data1);
  console.log(elapsed(), 'readChained3:', data2);
}

async function execute() {
  await readOnce();
  await readSeveral();
  await readChained();
}

execute();

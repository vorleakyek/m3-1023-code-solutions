/**
 * Simulates a network call by delaying for one second and returning a message.
 * If `doReject` is truthy, it will reject the Promise, otherwise it will resolve.
 * Uses `setTimeout` to mimic a slow network connection.
 */
export default function read(url, doResolve = true) {
  return new Promise((resolve, reject) => {
    return setTimeout(
      () =>
        doResolve
          ? resolve(`read ${url}`)
          : reject(new Error(`rejected ${url}`)),
      1000
    );
  });
}

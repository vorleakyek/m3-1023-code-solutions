import { readFile } from 'node:fs/promises';

export default async function read(filePath) {
  try {
    const promiseContent = await readFile(filePath, { encoding: 'utf8' });
    const dataObj = JSON.parse(promiseContent);
    const { notes } = dataObj;

    for (const prop in notes) {
      console.log(`${prop}: ${notes[prop]}`);
    }
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

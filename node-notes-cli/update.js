import { readFile, writeFile } from 'node:fs/promises';

export default async function update(filePath) {
  const propName = process.argv[3];
  const newValue = process.argv[4];

  try {
    const promiseContent = await readFile(filePath, { encoding: 'utf8' });
    const dataObj = JSON.parse(promiseContent);
    const { notes } = dataObj;
    for (const prop in notes) {
      if (prop === propName) {
        notes[prop] = newValue;
      }
    }
    const dataString = JSON.stringify(dataObj, null, 2);
    await writeFile('data.json', dataString);
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

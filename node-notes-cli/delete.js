import { readFile, writeFile } from 'node:fs/promises';

export default async function deleting(filePath) {
  const propName = process.argv[3];

  try {
    const promiseContent = await readFile(filePath, { encoding: 'utf8' });
    const dataObj = JSON.parse(promiseContent);
    const { notes } = dataObj;

    for (const prop in notes) {
      if (prop === propName) {
        delete notes[prop];
      }
    }

    const dataString = JSON.stringify(dataObj, null, 2);
    await writeFile('data.json', dataString);
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

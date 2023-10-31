import { readFile, writeFile } from 'node:fs/promises';

export default async function create(filePath) {
  const newItem = process.argv[3];
  try {
    const promiseContent = await readFile(filePath, { encoding: 'utf8' });
    const dataObj = JSON.parse(promiseContent);
    let { nextId, notes } = dataObj;
    nextId++;
    notes[nextId] = newItem;
    dataObj.nextId = nextId;
    const dataString = JSON.stringify(dataObj, null, 2);
    await writeFile('data.json', dataString);
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

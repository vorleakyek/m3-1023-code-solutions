import { readFile } from 'node:fs/promises';

async function readFileContent(path) {
  try {
    const content = await readFile(path, { encoding: 'utf8' });
    console.log(content);
  } catch (error) {
    console.error('Error', error.message);
  }
}

readFileContent('./dijkstra.txt');

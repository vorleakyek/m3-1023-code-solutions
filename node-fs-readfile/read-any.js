import { readFile } from 'node:fs/promises';

async function readFileContent(filePath) {
  try {
    const content = await readFile(filePath, { encoding: 'utf8' });
    console.log(content);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const filePath = './' + process.argv[2];
readFileContent(filePath);

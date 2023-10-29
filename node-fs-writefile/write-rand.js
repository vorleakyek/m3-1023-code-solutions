import { writeFile } from 'node:fs/promises';

async function writeAFile() {
  try {
    const randomNumber = Math.random();
    const content = String(randomNumber) + '\n';
    await writeFile('random.txt', content);
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

writeAFile();

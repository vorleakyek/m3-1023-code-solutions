import { writeFile } from 'node:fs/promises';

async function writeAFile() {
  try {
    const content = process.argv[2] + '\n';
    await writeFile('note.txt', content);
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

writeAFile();

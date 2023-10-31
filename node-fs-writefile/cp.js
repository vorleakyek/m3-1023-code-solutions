import { readFile, writeFile } from 'node:fs/promises';

async function copyAFile() {
  const originalFilePath = './' + process.argv[2];
  const copiedFileName = process.argv[3];

  try {
    const content = await readFile(originalFilePath, { encoding: 'utf8' });
    await writeFile(copiedFileName, content);
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

copyAFile();

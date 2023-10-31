import { readFile } from 'node:fs/promises';

async function printContent() {
  const fileNamesArray = process.argv.slice(2);

  try {
    const promisesArray = fileNamesArray.map((fileName) =>
      readFile(`./${fileName}`, { encoding: 'utf8' })
    );
    const resultArray = await Promise.all(promisesArray);
    resultArray.forEach((content) => console.log(content));
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

printContent();

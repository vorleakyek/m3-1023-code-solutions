import read from './read.js';
import create from './create.js';
import update from './update.js';
import deleting from './delete.js';

function execute() {
  const operation = process.argv[2];
  const filePath = './data.json';

  switch (operation) {
    case 'read':
      read(filePath);
      break;
    case 'create':
      create(filePath);
      break;
    case 'update':
      update(filePath);
      break;
    case 'delete':
      deleting(filePath);
      break;
    default:
      console.log('Invalid operation!');
  }
}

execute();

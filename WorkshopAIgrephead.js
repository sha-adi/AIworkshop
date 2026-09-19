/**
workshopAihead grep is my version of the Linux grep command.

To run it, we need to use:

node workshopAihead.js <Pattern> <FileName>

Example:

node workshopAihead.js "ERROR" server.log
*/

const fs = require('fs');

if (process.argv.length !== 3) {
  console.log('Missing arguments');
  console.log('Usage: node WorkshopAIgrephead.js <FileName>');
  return;
}

let filename = process.argv[2];

let content = fs.readFileSync(filename, 'utf-8');

let lines = content.split('\n');

for (let i = 0; i < 5 && i < lines.length; i++) {
  console.log(lines[i]);
}

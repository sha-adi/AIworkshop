/**
workshopAi grep is my version of the Linux grep command.

To run it, we need to use:

node workshopAi.js <Pattern> <FileName>

Example:

node workshopAi.js "ERROR" server.log
*/

const fs = require('fs');
const path = require('path');


if (process.argv.length !==4){
  console.log('Missing arguments');
  console.log(`Usage: Node $(path.basename (process.argv[1])} <Patetrn> <FileName>`);
  return;
}

let filename = process.argv[3];
let pattern = process.argv[2];
let content = fs.readFileSync(filename, 'utf-8');


let lines  = content.split('\n');
let count = 0;

for(let line of lines){
  if (line.includes(pattern) && count < 2 ){
    count++;
    console.log(line);
  }
}
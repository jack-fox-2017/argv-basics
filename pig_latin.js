'use strict'

let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) => {
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }

  return result.join(" ")
}

// Your CLI code here

// console.log(process.argv);
// process.argv.forEach((val,index,array) => {
//   console.log(`${index}: '${val}'`);
// });
//


//https://nodejs.org/api/readline.html
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Input sentence here: '
});

rl.prompt();

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  console.log(`Pig latin word: ${pigLatin(input)}`);
});

rl.prompt();

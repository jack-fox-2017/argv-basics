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


let args = process.argv;

let word = [];
for(let i = 2; i < args.length; i++)
{
  word.push(args[i])
}

console.log(convert(word.join(' ')));

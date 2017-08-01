'use strict'

let pigLatin = (word) => {
  let splitFirstLeter =  word.split('');
  for (let i = 0; i < splitFirstLeter.length; i++) {
    if(isPowel(splitFirstLeter[0])) {
      return word;
    }
    if(isPowel(splitFirstLeter[i])) {
      return `${word.substr(i)}${word.slice(0,i)}ay`;
    }
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
let args = process.argv.splice(2,3)
console.log(convert(args));

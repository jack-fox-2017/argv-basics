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
  return (/^[aeiou]$/i).test(char);//regex
}

let convert = (sentence) => {
  let result = []
  for (let i=0;i<sentence.length;i++) {
    result[i] = pigLatin(sentence[i])
  }

  return result.join(" ")
}

let argvPertama = process.argv.slice(2)
console.log(convert(argvPertama))

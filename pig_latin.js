'use strict'




// process.argv.forEach((val, index, array) => {
//   console.log(`${index} <- index: ${val} <- value`);
// })


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
var temp = []
for (var i = 2; i < process.argv.length; i++) {
  temp.push(process.argv[i])
}
var word = temp.join(' ')
console.log(convert(word))

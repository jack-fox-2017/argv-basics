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

let execute = process.argv
// console.log(execute);
let result = []
if(execute[2] === undefined){
  console.log("Format penulisan yang benar --> 'node pig_latin.js ini kata yang akan berubah'");
} else {
  for(let i = 2; i < execute.length; i++){
    result.push(convert(execute[i]))
  }
  console.log(result.join(" ")); 
}

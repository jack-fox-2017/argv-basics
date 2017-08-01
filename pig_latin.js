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

// process.argv.forEach((val, index, array) =>{
// console.log(`${index}`: '${val}');
// });
// console.log(convert('hello wolrd'));

//INGAAAAAATTTTTT, process.agrv itu ARRAAYYYY, convert mintanya satu string

var ogi = ['blabla','blabla','hello', 'world']
//AMBIL: hello sama world, trus join pake " " biar jadi satu string
var potong = ogi.slice(2).join(' ')
// var oke = potong.join(' ')
// console.log(convert(potong))


// console.log(convert(process.argv[2]) + ' ' + convert(process.argv[3]));
 console.log(convert(process.argv.slice(2).join(' ')));
// console.log(convert('hello world'))

// Your CLI code here

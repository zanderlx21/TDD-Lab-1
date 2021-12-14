function translate(word) {
  let lowWord = word.toLowerCase();   
  let vowels = ["a", "e", "i", "o", "u"];
  let firstLetter = lowWord.charAt(0);
  let lowWordMinus = lowWord.substring(1);
  let pigLatinWord;

  if (vowels.includes(firstLetter)) {
  pigLatinWord = lowWord.concat("way");
  } else {
    pigLatinWord = lowWordMinus.concat(firstLetter + "ay")
  } 
  return pigLatinWord;
};

module.exports = translate;

function getLongestWord(sentence) {
  let words = sentence.replace(/[^a-zA-Z\s]/g, "").split(/\s+/);
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(getLongestWord("Du sublime, au ridicule il n'y a qu'un pas."));

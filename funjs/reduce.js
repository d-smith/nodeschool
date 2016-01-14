function countWords(inputWords) {
  return inputWords.reduce(function(countMap, word) {
    if(countMap[word] == undefined) {
      countMap[word] = 1;
    } else {
      countMap[word] = countMap[word] + 1;
    }

    return countMap;
  }, {})
}

module.exports = countWords

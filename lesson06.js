module.exports = function(inputWords){
  return inputWords.reduce(function(previousValue, currentValue){
    if(previousValue[currentValue] >= 1){
      previousValue[currentValue]++;
    } else {
      previousValue[currentValue] = 1;
    }
    return previousValue;
  }, {});
};

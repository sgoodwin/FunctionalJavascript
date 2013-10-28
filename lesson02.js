module.exports = function repeat(operation, num){
  num--;
  if(num > 0){
    operation();
  }
}

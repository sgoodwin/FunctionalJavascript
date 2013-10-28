module.exports = function duckCount(){
  var possibleDucks = Array.prototype.slice.call(arguments, 0);

  return possibleDucks.reduce(function(count, possibleDuck){
    if(Object.prototype.hasOwnProperty.call(possibleDuck, 'quack')){
      return count+1;
    } else {
      return count;
    }
  }, 0);
};

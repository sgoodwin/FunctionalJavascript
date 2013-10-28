var repeat = function(operation, count){
  if(count <= 0) return;

  operation();

  setTimeout(function(){
    repeat(operation, count-1);
  }, 0);
};

module.exports = repeat;

module.exports = function logger(namespace){
  return function(){
    var text = Array.prototype.slice.call(arguments, 0).join(' ');
    console.log(namespace + " " +  text);
  };
};

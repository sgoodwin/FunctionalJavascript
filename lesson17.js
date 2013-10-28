function curryN(fn, n) {
  function curried(){
    var args = Array.prototype.slice.call(arguments, 0);

    var length = n === undefined ? fn.length : n;
    if(args.length === length){
      return fn.apply(null, arguments);
    }

    return function(){
      return curried.apply(null, args.concat(Array.prototype.slice.call(arguments)));
    };
  };

  return curried;
};
module.exports = curryN;

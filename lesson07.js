module.exports = function reduce(array, func, initial){
  ar value = func.call(this, initial, array[0]);

  if(array.length > 1){
    return reduce(array.slice(1), func, value);
  } else {
    return value;
  }
};

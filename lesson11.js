module.exports = function arrayMap(array, fn){
  return array.reduce(function(results, current, index, array){
    results.push(fn.call(null, current, index, array));
    return results;
  }, []);
};

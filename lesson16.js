function getDependencies(tree, name) {
  if(!tree.dependencies){
    return [];
  }

  var names = Object.getOwnPropertyNames(tree.dependencies);
  return names.reduce(function(previous, current){
    var item = tree.dependencies[current];
    return previous.concat(current + "@" + item.version, getDependencies(item, current));
  }, []).sort().filter(function(value, index, array){
    return array.lastIndexOf(value) == index;
  });
}

module.exports = getDependencies;

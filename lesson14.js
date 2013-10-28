function repeat(operation, num) {
  if (num <= 0) return;
  operation();
  return repeat.bind(null, operation, --num);
}

function trampoline(fn) {
  while(fn && fn instanceof Function){
    fn = fn.apply(fn.context, fn.args);
  }
  return fn;
}

module.exports = function(operation, num) {
  return trampoline(repeat.bind(null, operation, num));
}

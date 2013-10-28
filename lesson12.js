module.exports = function Spy(target, method){
  var spy = {
    count: 0
  };

  var oldFunction = target[method];
  target[method] = function(){
    spy.count++;
    return oldFunction.apply(target, arguments);
  };

  return spy; 
};

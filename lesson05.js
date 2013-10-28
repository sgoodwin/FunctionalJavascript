module.exports = function checkUsersValid(goodUsers) {
  return function(otherUsers){
    var userIDs = goodUsers.map(function(user){
      return user.id;
    });

    return otherUsers.map(function(user){
      return user.id;
    }).every(function(element, index, array){
      return userIDs.lastIndexOf(element) != -1;
    });
  };
};

function loadUsers(userIds, load, done) {
  var counter = userIds.length;
  var users = [];
  function tick(){
    counter--;
    if(counter === 0){
      done(users);
    }
  }
  
  userIds.forEach(function(userId, index){
    load(userId, function(user){
      users[index] = user;
      tick();
    });
  });
}

module.exports = loadUsers;

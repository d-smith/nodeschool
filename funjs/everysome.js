function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(user){
      return goodUsers.some(function(current){
        return current.id === user.id;
      });
    });
  };
}

module.exports = checkUsersValid

const helpers = {
  "isOwnProfile": function (currentUser, user) {
    if (currentUser === undefined || user === undefined) {
      return false;
    } else if (currentUser.id === user.id) {
      return true
    }
  },
  "getName": (user) => {
    return user.name();
  },
  "getBio": (user) => {
    return user.bio;
  },
  "getDate": (user) => {
    return user.createdAt;
  },
  "getUserName": function (user) {
    return user.username;
  }
}

module.exports = helpers;
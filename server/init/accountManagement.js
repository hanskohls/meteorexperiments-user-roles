Meteor.startup(function(){
  var users = [
      { name: "admin", email: "admin@localhost", roles:['admin'] },
      { name: "user", email: "user@localhost", roles:['user'] },
      { name: "newuser", email: "newuser@localhost", roles:[] },
      { name: "useradmin", email: "appadmin@localhost", roles:['user', 'useradmin'] }
    ];
  
  _.each(users, function(user){

    var userAccount = Accounts.findUserByEmail(user.email);
    var id = "";
    if (userAccount == null){
      id = Accounts.createUser({
        email: user.email,
        password: 'password',
        profile: {name: user.name}
      });
    } else {
      id = userAccount._id;
    }
    if (user.roles.length > 0){
      Roles.setUserRoles(id, user.roles, 'default-group')
    }
  });
});
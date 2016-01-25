Meteor.startup(function(){
  var users = [
      { name: "admin", email: "admin@localhost", roles:['admin'] },
      { name: "user", email: "user@localhost", roles:['user'] },
      { name: "newuser", email: "newuser@localhost", roles:[] },
      { name: "useradmin", email: "appadmin@localhost", roles:['user', 'useradmin'] }
    ];
  
  _.each(users, function(user){
    var id;
    id = Accounts.createUser({
      email: user.email,
      password: 'password',
      profile: {name: user.name}
    });
    
    if (user.roles.length > 0){
      Roles.addUsersToRoles(id, user.roles, 'default-group');
    }
  });
});
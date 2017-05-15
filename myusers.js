module.exports = function(){

  const index = function(req, res){
    res.send('Greet Users');
  };
///////////GETUSER FUNCTION: RETUNRS THE VARIABLE <USER>/////////
  function getUser(req, res){

    var user = req.params.users;
    return user;
  }
var greetedUsers = [];
var uniqueList = [];

////////////////GREETED FUNCTION: RESPONDS WITH THE LIST OF GREETED USERS THAT HAVE LINKS/////
const greeted = function(req, res){
  //greetedUsers.forEach(function());
  var list = [];
  var user = getUser(req, res);
  uniqueList.forEach(function(user){
    list.push("<a href= counter/" + user + ">" + user + "</a>");
  });
  res.send('My list: '+list);

}
//////GREET FUNCTION: RESPONDS AND PUSHES NAMES TO AN ARRAY///////
  const greet = function(req, res){
  //  res.send('Greet a user');
  var user = getUser(req, res);
  var foundUser = uniqueList.find(function(currentUser){
    return currentUser === user;
  });
  if (user && !foundUser) {
    uniqueList.push(user);
  }
  greetedUsers.push(user);
    //res.redirect('/greeted');
    res.send('Hello, '+ user +'!');
  }

/////////////COUNTGREETINGS FUNCTION: COUNTS HOW TIMES A USER HAS BEEN GREETED///////
  const countGreetings = function(req, res){
    var count = 0;
    var user = getUser(req, res);
      for (var i = 0; i < greetedUsers.length; i++) {
        if (user === greetedUsers[i]) {
          count++;
        }
      }
      res.send('Hello, '+user + ' is greeted for the ' + count +' times');


  }
  return{
    greet,
    index,
    greeted,
    countGreetings
  }
}

module.exports = function(){



  const index = function(res, req){
    res.send('Greet Users');
  };
var listArray = [];

  const greet = function(res, req){
   var users = req.params.users;
  //  res.send('Greet a user');

  res.redirect('/users');
    listArray.push(req.users);

    res.send('Hello ' + req.users + '!');
  }
  return{
    greet,
    index
  }
}

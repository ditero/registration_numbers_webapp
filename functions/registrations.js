'use strict'
module.exports = function(models) {

  ////////////////////////////FIND REGISTRATION NUMBERS FROM MONGOOSE DATABASE//////////////////////////////////
const findCollection = function(cb) {
  models.Registration.find({}).exec(function(err, results) {
    if (err) {
      return cb(err);
    }
    cb(null, results);
  });
};

  const main = function(req, res){
    res.render('regview/regnumbers')
  }

  const paramReg = function(req, res){
    var registrationNum = req.params.number
    res.render('regview/regnumbers', {
      registrationNum : registrationNum
    })

  }

  var listReg = []
  const addReg =function(req, res, next){
    var registration = {
    regnum: req.body.regplate
    }
    listReg.push(registration.regnum);
    models.Registration.create(registration, function(err, results){
      if (err) {
        return next(err);
      }else {
        findCollection(function(err, results){
          res.render('regview/regnumbers', {
            registrationNum : results
          })
        })
      }
    });

  }

return{
  main,
  paramReg,
  addReg
}
}

'use strict'
module.exports = function(models) {

  ////////////////////////////FIND REGISTRATION NUMBERS FROM MONGOOSE DATABASE//////////////////////////////////
const findCollection = function(cb) {
  models.registrations.find({})
  .exec(function(err, results) {
    if (err) {
      return cb(err);
    }
    cb(null, results);
  });
};

  const regnums = function(req, res){
    findCollection(function(err, results){
      res.render('regview/regnumbers', {
        registrationNum : results
      })
    })
  }

  const paramReg = function(req, res){
    var registrationNum = req.params.number
    res.render('regview/regnumbers', {
      registrationNum : registrationNum
    })

  }

  const addReg =function(req, res, next){
    var registration = {
    regnum: req.body.regplate
    }
    // listReg.push(registration.regnum);
    models.registrations.create(registration, function(err, results){
      if (err) {
        if (err.code === 11000) {
          req.flash('error', 'This number already exits');
          res.redirect('/reg_number');
        }
        // return next(err);
      }else {
        res.redirect('/reg_number');
      }
    });

  }


const filterTown = function(req, res, next){
  var regNumber = req.body.town;
  models.registrations.find({regnum :{$regex: regNumber, $options: "x"}})
  .exec(function(err, results){
    if (err) {
      return next(err);
    }else {
      res.render('regview/regnumbers',{
        registrationNum : results
      })
    }
  });

};

return{
  regnums,
  paramReg,
  addReg,
  filterTown
}
}

'use strict'
module.exports = function() {

  const main = function(req, res){
    res.render('regview/regnumbers')
  }

  const paramReg = function(req, res){
    var registrationNum = req.params.number
    res.render('regview/regnumbers', {
      registrationNum : registrationNum
    })

  }

  const bodyReg =function(req, res){
    var postRegNum = req.body.regplate
    res.render('regview/regnumbers', {
      registrationNum : postRegNum
    })
  }
return{
  main,
  paramReg,
  bodyReg
}
}

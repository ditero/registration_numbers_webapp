const mongoose = require('mongoose')
module.exports = function (mongoURL) {
  mongoose.Promise = global.Promise;
  mongoose.connect(mongoURL);

  const RegnumSchema = mongoose.Schema({
    regnum : String
  });

  const Registration = mongoose.model('Registration', RegnumSchema);

  return{
    Registration
  }
};

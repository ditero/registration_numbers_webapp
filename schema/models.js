const mongoose = require('mongoose')
module.exports = function (mongoURL) {
  mongoose.Promise = global.Promise;
  mongoose.connect(mongoURL);

  const RegnumSchema = mongoose.Schema({
    regnum: String
  });

  RegnumSchema.index({
    regnum :    1
  },
    {
      unique : true
    });

  const registrations = mongoose.model('registrations', RegnumSchema);

  return{
    registrations
  }
};

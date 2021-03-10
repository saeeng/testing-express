var os = require("os");

module.exports = function (req, res) {
  var networkInterfaces = os.networkInterfaces();

  res.send(networkInterfaces);
};

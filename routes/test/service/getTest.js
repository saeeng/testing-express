// var os = require("os");

module.exports = function (req, res) {
  // var networkInterfaces = os.networkInterfaces();
  const pid = process.pid;
  res.json(pid);
};

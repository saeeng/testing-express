// var os = require("os");

module.exports = async function (req, res) {
  // var networkInterfaces = os.networkInterfaces();
  // console.log(req.headers);
  // console.log(res);

  // const pid = process.pid;
  // setTimeout(() => {
  //   res.json(pid);
  // }, 2000);

  res.json(pid);
};

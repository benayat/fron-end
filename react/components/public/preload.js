var child = require('child_process').execFile;
var executablePath = './shutdown.bat';

child(executablePath, function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data.toString());
});

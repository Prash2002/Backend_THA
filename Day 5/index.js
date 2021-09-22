var fs = require("fs");
// console.log(process.argv);
var myArgs = process.argv.slice(2);

switch (myArgs[0]) {
  case "--create-dir":
    fs.mkdirSync(myArgs[1]);
    break;

  case "--create-file":
    var s = "";
    myArgs.forEach((item, i) => {
      if (i > 1) s += item + " ";
    });
    console.log(s);
    fs.writeFileSync(myArgs[1], s);
    break;

  case "--read-file":
    console.log(fs.readFileSync(myArgs[1], "utf-8"));
    break;

  case "--rename":
    fs.renameSync(myArgs[1], myArgs[2], (err) => {
      console.log(err);
    });
    break;

  case "--delete-file":
    fs.unlinkSync(myArgs[1], (err) => {
      console.log(err);
    });
    break;

  case "--delete-dir":
    fs.rmdirSync(myArgs[1], { recursive: true });
    break;

  case "--args":
    console.log("--create-dir");
    console.log("--create-file");
    console.log("--read-file");
    console.log("--rename");
    console.log("--delete-file");
    console.log("--delete-dir");
    break;

  default:
    console.log("not a valid arg");
}

var fs = require("fs").promises;
// console.log(process.argv);
var myArgs = process.argv.slice(2);

async function asyncFileSys() {
  switch (myArgs[0]) {
    case "--create-dir":
      await fs.mkdir(myArgs[1]);
      break;

    case "--create-file":
      var s = "";
      myArgs.forEach((item, i) => {
        if (i > 1) s += item + " ";
      });
      console.log(s);
      await fs.writeFile(myArgs[1], s);
      break;

    case "--append-file":
      var s = "";
      myArgs.forEach((item, i) => {
        if (i > 1) s += item + " ";
      });
      console.log(s);
      await fs.appendFile(myArgs[1], s);
      break;

    case "--read-file":
      console.log(await fs.readFile(myArgs[1], "utf-8"));
      break;

    case "--rename":
      await fs.rename(myArgs[1], myArgs[2], (err) => {
        console.log(err);
      });
      break;

    case "--delete-file":
      await fs.unlink(myArgs[1], (err) => {
        console.log(err);
      });
      break;

    case "--delete-dir":
      await fs.rmdir(myArgs[1], { recursive: true });
      break;

    case "--args":
      console.log("--create-dir");
      console.log("--create-file");
      console.log("--append-file");
      console.log("--read-file");
      console.log("--rename");
      console.log("--delete-file");
      console.log("--delete-dir");
      break;

    default:
      console.log("not a valid arg");
  }
}

asyncFileSys();

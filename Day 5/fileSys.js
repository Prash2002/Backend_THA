var fs = require("fs");
fs.mkdirSync("test");
fs.writeFileSync("test/hello.txt", "hello world!", (err) => {
  console.log(err);
});

fs.appendFileSync("test/hello.txt", " cool stuff appended");

console.log(fs.readFileSync("test/hello.txt", "utf-8"));

fs.rename("./test", "./renamed", (err) => {
  console.log(err);
});

var fs = require("fs").promises;
async function create() {
  await fs.mkdir("test", (err) => {
    console.log(err);
  });

  await fs.writeFile("test/hello.txt", "hello world!", (err) => {
    console.log(err);
  });

  await fs.appendFile("test/hello.txt", " cool stuff appended", (err) => {
    console.log(err);
  });

  console.log(
    await fs.readFile("test/hello.txt", "utf-8", (err) => {
      console.log(err);
    })
  );

  await fs.rename("./test", "./renamed", (err) => {
    console.log(err);
  });
}

create();

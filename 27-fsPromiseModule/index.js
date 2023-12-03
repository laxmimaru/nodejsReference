/**promises approach */

const fs = require("node:fs/promises");

fs.readFile("./file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/*async await approach*/

async function readFile() {
  try {
    const fileContents = await fs.readFile("./file.txt", "utf-8");
    console.log(fileContents);
  } catch (error) {
    console.log(error);
  }
}

readFile();

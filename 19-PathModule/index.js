const path = require("node:path");
const json = require("../17-ImportJSONWatchMode/data.json");
const { parse } = require("querystring");

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));

/**isAbsolute */
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("../17-ImportJSONWatchMode/data.json"));

/**join **/
console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));
console.log(path.join(__dirname, "data.json"));

/**resolve */
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));

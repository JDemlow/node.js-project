import path from "path";
import url from "url";

const filePath = "./dir1./dir2/test.txt";

// basename() - returns the last portion of a path

console.log(path.basename(filePath));

// dirname() - returns the directory name

console.log(path.dirname(filePath));

// extname() - returns the extension name

console.log(path.extname(filePath));

// parse() - parses a path into an object

console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// join() - combines path segments into a single path

const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2);

// resolve() - resolves a sequence of paths or path segments into an absolute path

const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath3);

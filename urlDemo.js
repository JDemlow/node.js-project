import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

const urlObj = new URL(urlString);

console.log(urlObj);

// format() - returns a formatted URL string

console.log(url.format(urlObj));

// import.meta.url - returns the URL of the current module

console.log(import.meta.url);

// fileURLToPath() - converts a file URL to a path

console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);

console.log(params.get("q"));
params.append("limit", 5);
params.delete("limit");
console.log(params);

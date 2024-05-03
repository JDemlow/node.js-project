import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());
console.log(`Number of posts: ${getPostsLength()}`);

// const { generateRandomNumber, celsiusToFahrenheit } = require("./utils");

// console.log(`Random number is: ${generateRandomNumber()}`);
// console.log(`40 C in F is: ${celsiusToFahrenheit(40)}`);

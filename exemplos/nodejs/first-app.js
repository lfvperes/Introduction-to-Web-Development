/**
 * fs stands for file system
 * this syntax imports file system functionalities into this .js file
 */
const fs = require('fs');

 /**
  * create a new file
  * @argument { string } path including file name
  * @argument { any } data
  */
fs.writeFileSync('hello.txt', 'Hello from Node.js');
const figlet = require('figlet');

const colors =require('colors');

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);// Handle the error appropriately
    return;
  }
  console.log(data);// Display the ASCII art in the console
  console.log(data.rainbow); 
});
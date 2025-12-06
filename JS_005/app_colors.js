const colors=require('colors');
const jokes=require('give-me-a-joke');
//console.log(colors);

jokes.getRandomDadJoke(function(joke){
    console.log(joke.rainbow);
});

console.log('hello'.green);
console.log('world'.blue);  
console.log('!!!'.rainbow);

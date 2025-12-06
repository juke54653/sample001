console.log("This is app.js");

console.time("test");
let n=12345;
let total=0;
for(let i=0;i<=n;i++){
    total+=i;
}
console.log("1から"+n+"までの和は"+total);
console.timeEnd("test");
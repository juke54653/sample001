const fs=require('fs');
const filename=process.argv[1]
const dirname=process.argv[2] || 'temps/b/banana';

console.log('Boilerplate code executed.');
console.log(filename);
//console.log(fs);

//同期処理でディレクトリを作成
fs.mkdirSync(dirname, { recursive: true });
console.log(`Directory ${dirname} created successfully.`);

fs.writeFileSync(`${dirname}/info.txt`,'');
fs.writeFileSync(`${dirname}/index.html`,'');
fs.writeFileSync(`${dirname}/style.css`,'');
fs.writeFileSync(`${dirname}/app.js`,'');

console.log('End of boilerplate2 code.');
const fs=require('fs');

console.log('Boilerplate code executed.');
console.log(fs);

//非同期処理でディレクトリを作成
fs.mkdir('temps/a/apple', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Directory /temp/a/apple created successfully.');
});

console.log('End of boilerplate code.');
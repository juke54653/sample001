function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}   

// Export the functions for use in other files。この処理により、
// 他のファイルからこれらの関数をインポートできるようになります。
module.exports = {
     add, subtract 
};
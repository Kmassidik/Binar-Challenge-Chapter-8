function randomString() {
    let length = 10
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = '';
    for (var i = length; i > 0; --i) 
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

module.exports = randomString
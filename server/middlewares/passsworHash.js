const bcrypt = require('bcrypt');
require('dotenv').config()

function hashPassword(password){
    const hash = bcrypt.hashSync(password, +(process.env.NUMBER));
    return hash
}
function checkPassword(password,passwordDB){
    const check = bcrypt.compareSync(password,passwordDB);
    return check
}

module.exports = { hashPassword, checkPassword }
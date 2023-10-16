const  bcrypt = require('bcrypt');
const config = require('../../../config');

exports.hashPasswordHook= async(password)=>{
  const saltRounds = Number(config.bycrypt_salt_rounds);
  return await bcrypt.hash(password, saltRounds);
}
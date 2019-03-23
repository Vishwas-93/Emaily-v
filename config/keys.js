// keys.js - Figure out what kind of keys to return

if(process.env.NODE_ENV === 'production'){
    // We are in production environment
    module.exports = require('./prod');
}else{
    // We are in dev environment
    module.exports = require('./dev');
}
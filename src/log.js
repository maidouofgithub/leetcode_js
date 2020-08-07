function info( msg,type='') {
    console.log(`${new Date().toString()},${type}:${msg}`);
}

module.exports = { info }
'use strict'

const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');
const { EADDRINUSE } = require('constants');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta ' + port);

// normalizing Port using environment variables
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

// managing errors
function onError(error){
    if (error.syscall !== 'listen') throw error;

    const bind = typeof port === 'string' ? 
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':      // permission
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':  // address in use
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// takes server information and start debugging
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'Pipe ' + addr :
        'Port ' + addr.port;
    debug('Listening on ' + bind);
}
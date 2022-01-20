const config = require('./config.js')
const server = require('./server.js')

server.run(config.fromEnvVars())

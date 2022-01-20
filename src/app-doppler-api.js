const config = require('./config.js')
const server = require('./server.js')

;(async () => {
  server.run(await config.fromDopplerAPI())
})()

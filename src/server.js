const http = require('http')

function run(config) {
  const httpServer = http
    .createServer((_, res) => {
      res.setHeader('Content-Type', 'application/json')
      res.writeHead(200)
      console.log('[info]: HTTP request received')
      res.end(JSON.stringify(config, null, 2))
    })
    .listen(config.PORT, config.HOSTNAME, () => {
      console.log(`\n[info]: Server running at http://${config.HOSTNAME}:${config.PORT}/`)
    })

  const onShutdown = code => {
    console.log(`\n[info]: ${code} Received`)
    console.log('[info]: Shutting down')
    httpServer.close()
  }

  process.on('SIGINT', onShutdown)
  process.on('SIGTERM', onShutdown)
}

module.exports = { run }

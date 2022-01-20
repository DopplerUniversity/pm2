const { spawn } = require('child_process')

const doppler = spawn('doppler', ['run', '--', 'node', 'src/app-env-vars.js'])
doppler.stdout.on('data', data => console.log(`${data}`))
doppler.stderr.on('data', data => console.error(`${data}`))

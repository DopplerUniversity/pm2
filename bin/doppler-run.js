import { spawn } from 'child_process'

const doppler = spawn('doppler', ['run', '--', 'npm', 'start'])
doppler.stdout.on('data', (data) => console.log(`${data}`))
doppler.stderr.on('data', (data) => console.error(`${data}`))

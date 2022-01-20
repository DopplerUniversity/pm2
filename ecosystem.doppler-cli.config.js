module.exports = {
  apps: [{
    name: 'doppler-cli',
    script: './src/app-doppler-cli.js',
    instances: 2,
    exec_mode: 'cluster'
  }]
}

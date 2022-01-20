module.exports = {
  apps: [{
    name: 'doppler-api',
    script: './src/app-doppler-api.js',
    instances: 2,
    exec_mode: 'cluster'
  }]
}

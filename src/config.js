const https = require('https')
const { execSync } = require('child_process')

function createConfig(env) {
  return {
    DOPPLER_PROJECT: env.DOPPLER_PROJECT,
    DOPPLER_ENVIRONMENT: env.DOPPLER_ENVIRONMENT,
    DOPPLER_CONFIG: env.DOPPLER_CONFIG,
    HOSTNAME: env.HOSTNAME,
    PORT: env.PORT,
    API_KEY: env.API_KEY,
    AUTH_TOKEN: env.AUTH_TOKEN,
  }
}

function fromEnvVars() {
  if (!process.env.DOPPLER_PROJECT) {
    console.error('[error]: Doppler environment variables not found. Exiting.')
    process.exit(1)
  }

  return createConfig(process.env)
}

function fromDopplerCLI() {
  try {
    return createConfig(JSON.parse(execSync('doppler secrets download --no-file --format json')))
  } catch (error) {
    process.exit(1)
  }

  return null
}

async function fromDopplerAPI() {
  const secrets = await new Promise((resolve, reject) => {
    https
      .get(
        `https://${process.env.DOPPLER_TOKEN}@api.doppler.com/v3/configs/config/secrets/download?format=json`,
        res => {
          let secretsPayload = ''
          res.on('data', data => {
            secretsPayload += data
          })
          res.on('end', () => resolve(JSON.parse(secretsPayload)))
        }
      )
      .on('error', e => reject(e))
  })

  return createConfig(secrets)
}

module.exports = {
  fromEnvVars,
  fromDopplerCLI,
  fromDopplerAPI,
}

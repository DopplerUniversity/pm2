cluster:
	pm2 start ecosystem.doppler-cli.config.js --no-daemon

delete:
	pm2 delete doppler-run

# Doppler and PM2 Testing

## Set Up

Create project in Doppler:

```sh
doppler import
doppler setup --no-prompt
```

Install dependencies:

```sh
npm install typescript pm2 -g
npm install
```

## Test

PM2 Bash script (recommended):

```sh
npm run pm2-start-bash
```

PM2 Node script (use if bash cannot be installed):

```sh
npm run pm2-start-node
```

View logs:

```sh
pm2 logs
```

Delete app:

```sh
npm run pm2-delete
```

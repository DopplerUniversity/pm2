# Doppler and PM2 Testing

Check out the [Doppler PM2 user guide](https://docs.doppler.com/docs/pm2) for detailed instructions on configuring an existing PM2 applications with Doppler.

> NOTE: Running pm2 commands with `--no-daemon` is recommended during testing and development for ease of use.

## Application overview

It's a simple HTTP server that returns a JSON payload of the application config and secrets in order to verify secret updates are occurring when restarting the PM2 managed processes using `pm2 restart`.

## SetUp

Create project in Doppler:

```sh
doppler import
doppler setup --no-interactive
```

Globally install PM2:

```sh
npm install pm2 -g
```

## Scripts

If using PM2 to run a single process, then running as a script is recommended:

Using bash (preferred):

```sh
pm2 start bin/doppler-run.sh
```

Using Node (use if bash cannot be installed):

```sh
pm2 start bin/doppler-run.js
```

You can also use an `ecosystem.config.js` file, provided it doesn't have any Cluster mode related directives:

```sh
pm2 start ecosystem.config.js
```

## Cluster mode

If running in Cluster mode, there are two ways this sample application can fetch secrets.

Using the Doppler CLI:

```sh
pm2 start ecosystem.doppler-cli.config.js
```

Or using the Doppler API:

```sh
pm2 start ecosystem.doppler-api.config.js
```

## Debugging

To list managed processes:

```sh
pm2 list
```

To view logs:

```sh
pm2 logs
```

To delete an app:

```sh
npm run pm2-delete
```

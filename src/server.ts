import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'node:http';

http
  .createServer(function (_: IncomingMessage, res: ServerResponse) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    console.log('HTTP request receieved');
    res.end(
      JSON.stringify(
        {
          DOPPLER_PROJECT: process.env['DOPPLER_PROJECT'],
          DOPPLER_ENVIRONMENT: process.env['DOPPLER_ENVIRONMENT'],
          DOPPLER_CONFIG: process.env['DOPPLER_CONFIG'],
          SECRET_1: process.env['SECRET_1'],
          SECRET_2: process.env['SECRET_2'],
        },
        null,
        4
      )
    );
  })
  .listen(8080, 'localhost', () => {
    console.log(
      `HTTP server at https://localhost:8080/ (Press CTRL+C to quit)`
    );
  });

import http from 'http';

const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Rajeshwari Rudravaram ');
  res.end('Hello World...! Here is my new app.');
}).listen(port, hostname);


console.log(`Server running at http://${hostname}:${port}/`);


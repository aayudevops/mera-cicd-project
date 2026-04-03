const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello! CI/CD Pipeline Chal Rahi Hai! 🚀\n');
});

server.listen(3000, () => {
  console.log('Server chal raha hai port 3000 pe!');
});

const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = 3000;
const hostname = 'localhost';

// Create server
const server = http.createServer(serverHandler);

 // callback function definition
function serverHandler(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  const url = req.url;
  if(url === '/about') {
    let filePath = path.resolve(__dirname, 'about.html');
    fs.createReadStream(filePath).pipe(res);
  } else if(url === '/contact') {
    let filePath = path.resolve(__dirname, 'contact.html');
    fs.createReadStream(filePath).pipe(res);
  } else if(url === '/home' || url === '/') {
    let filePath = path.resolve(__dirname, 'home.html');
    fs.createReadStream(filePath).pipe(res);
  } else {
    let filePath = path.resolve(__dirname, '404.html');
    fs.createReadStream(filePath).pipe(res);
  }
}

server.listen(PORT, hostname, () => {
    console.log(`Server running at ${hostname}:${PORT}`);   
  })
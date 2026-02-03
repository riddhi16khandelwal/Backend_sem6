const http = require('http');
const fs = require('fs');
const path = require('path');

const myserver = http.createServer((req, res) => {

  if (req.url === '/') {
    res.end('Home Page');
  }
  else if (req.url === '/aboutus') {
    
    const imagePath = path.join(__dirname, '2025-09-01 (1).png');

    res.writeHead(200, { 'Content-Type': 'image/png' });
    fs.createReadStream(imagePath).pipe(res);
  }

  else {
    
    res.end('404 not found');
  }
});

myserver.listen(8000, () => console.log('server is run'));

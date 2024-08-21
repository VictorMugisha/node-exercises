const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response body
    res.end('Hello, World!\n');
});

// The server listens on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

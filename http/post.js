const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        // Collect the data chunks
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        // When all data is received, process it
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Data received: ${body}`);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

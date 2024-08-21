const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl)
    if (req.method === 'GET' && parsedUrl.pathname === '/search') {
        const query = parsedUrl.query;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Search results for: ${query.hello}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
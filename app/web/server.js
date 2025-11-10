const http = require('http');

const PORT = process.env.PORT || 8080;


const server = http.createServer((_, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, app: 'challenge-cloud-web', msg: "cha;elenge cloud web is running!" }));
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
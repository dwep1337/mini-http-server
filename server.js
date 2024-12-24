/* 
    Mini HTTP server to redirect for https://guns.lol/dwep
*/

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(301, { Location: "https://guns.lol/dwep" });
  res.end();
});

const PORT = 8889;

server.listen(PORT, () => {
  console.log(`Done listening on port ${PORT}!`);
});

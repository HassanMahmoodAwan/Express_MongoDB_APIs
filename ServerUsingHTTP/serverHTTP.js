const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
      case "/":
        res.write(`<h1>Created first Server</h1>`);
        break;
      case "/nextPage":
        res.write(`<h1> page 2 </h1>`);
        break;
      default:
        res.write(`Page not found`);
        break;
    }

    res.end();
  })
  .listen(3000);

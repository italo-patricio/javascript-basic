const httpServer = require("http");
const port = 3000;
// const app1 = httpServer.createServer(function(req, res) {
//    res.writeHead(200, {'content-type': 'text-plain'});
//    res.end('To rodando nessa caraia!');
// });

// app1.listen(port, () => {
//     console.log('o servidor esta rodando na porta ' + port);
// })

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// const clientRoutes = require('./rotas/cliente');
app.use('/client', require('./rotas/cliente'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

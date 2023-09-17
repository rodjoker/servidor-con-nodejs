const http = require('http');
const chalk = require('chalk');
const host = "localhost";
const port = 8000;


const listener = (req, res) => {
  const name = 'Rodolfo Rodriguez';
  res.write(name)
  res.write(JSON.stringify("este es un mensaje enviado desde mi servidor en formato json"));
  res.end();
    
};

const server = http.createServer(listener);

server.listen(port, () => {
  console.log(chalk.green(`El servidor está escuchando en http://${host}:${port}`));
});
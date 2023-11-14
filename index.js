const http = require("http");
const { env } = require("process");
require('dotenv').config();

const requestController = () => {
  console.log("Recibimos nueva request")
}

const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT,() => {console.log("Aplicacion corriendo en el puerto " + PORT)})
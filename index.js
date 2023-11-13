const http = require("http")

const requestController = () => {
  console.log("Recibimos nueva requestttttt")
}

const server = http.createServer(requestController)

server.listen(3000)
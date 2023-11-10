const http = require("http")

const requestController = () => {
  console.log({global})
}

const server = http.createServer(requestController)

server.listen(3000)
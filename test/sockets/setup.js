const express = require('express')
const app = express()
app.set('port', 5555)
const http = require('http').Server(app)

export const testSockets = (callback) => {
  context('Server running with sockets', () => {
    beforeEach(startServer)
    afterEach(closeSockets)
    callback()
  })
}

const startServer = function(done) {
  this.server = require('socket.io')(http)
  // this.client = (http)
  http.listen()
  this.client = require('socket.io-client').connect('http://localhost:5555')
  console.log('startServer!', this.server)
  console.log('CLIENT',this.client)
  done()
  // this.serverInstance = server.start(5555, () => {
  //   console.log("TEST SERVER ON!")
  //   this.receivingSocket = io.connect('http://localhost:5555')
  //   done()
  // })
}

const closeSockets = function(done) {
  console.log('closeSockets!')
  // if(this.server) this.server.disconnect()
  if(this.client) this.client.disconnect()
  // if(this.serverInstance) this.serverInstance.close(done)
}

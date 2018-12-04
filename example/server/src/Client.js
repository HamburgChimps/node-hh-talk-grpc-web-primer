const Todo = require('./Todo')

class Client {
  constructor () {
    this._todo = new Todo()
  }

  acknowledge (call, callback) {
    callback(null, { message: `Hello ${call.request.name}! Well to grpc-web!` })
  }
}

module.exports = Client

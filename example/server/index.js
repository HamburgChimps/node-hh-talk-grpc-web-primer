
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const PROTO_PATH = `${__dirname}/../todo.proto`

const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
)
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
const todo = protoDescriptor.todo

function helloWorld (call, callback) {
  callback(null, { message: `Hello ${call.request.name}! Well to grpc-web!` })
}

function getServer () {
  const server = new grpc.Server()
  server.addService(todo.Todo.service, {
    helloWorld: helloWorld
  })
  return server
}

var server = getServer()
server.bind('0.0.0.0:9090', grpc.ServerCredentials.createInsecure())
server.start()

exports.getServer = getServer

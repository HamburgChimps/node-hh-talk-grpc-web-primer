const { HelloRequest } = require('./todo_pb.js')
const { TodoClient } = require('./todo_grpc_web_pb.js')

const client = new TodoClient('http://localhost:8080')

const request = new HelloRequest()
request.setName('World')

client.helloWorld(request, {}, (err, response) => {
  if (err) console.log('Error in hello world', err)
  const data = response.getMessage()
  console.log(data)
})

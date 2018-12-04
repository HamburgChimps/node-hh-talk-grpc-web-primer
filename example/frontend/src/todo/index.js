import { AcknowledgeRequest } from './todo_pb.js'
import { TodoClient } from './todo_grpc_web_pb.js'

class Todo {
  constructor () {
    this._client = new TodoClient('http://localhost:8080')
  }

  start (name) {
    return new Promise((resolve, reject) => {
      const request = new AcknowledgeRequest()
      request.setName(name)

      this._client.acknowledge(request, {}, (err, response) => {
        if (err) return reject(err)
        const data = response.getMessage()
        resolve(data)
      })
    })
  }
}

export default Todo

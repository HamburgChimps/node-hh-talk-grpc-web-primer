import React, { Component } from 'react'
import Todo from '../../todo'

class TodoContainer extends Component {
  constructor () {
    super()
    this.state = {
      message: '',
      err: '',
      todo: new Todo()
    }
  }

  async componentDidMount () {
    const { todo } = this.state
    try {
      const message = await todo.start('Jacob')
      this.setState({ message })
    } catch (err) {
      this.setState({ err })
    }
  }

  render () {
    const { message, err } = this.state
    return (
      <div>
        <p>{err && err.message}</p>
        <p>{message && message}</p>
      </div>
    )
  }
}

export default TodoContainer

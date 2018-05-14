import React, { Component } from 'react'
import Board from './components/board'

class App extends Component {
  constructor (props) {
    super(props)

    const rows = []
    const columns = []

    for (let i = 0; i < 6; i++) {
      rows.push(0)
    }

    for (let i = 0; i < 6; i++) {
      columns.push(rows)
    }

    console.log(columns);
    this.state = {board: columns}
  }

  render () {
    return (<div><Board board={this.state.board}/></div>)
  }
}

export default App
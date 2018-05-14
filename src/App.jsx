import React, { Component } from 'react'
import Board from './components/board'
import Input from './components/input'

class App extends Component {
  constructor (props) {
    super(props)

    const rowCount = 6;
    const rows = []
    const columns = []

    for (let i = 0; i < rowCount; i++) {
      rows.push(0)
    }

    for (let i = 0; i < rowCount; i++) {
      columns.push(rows)
    }

    this.state = {board: columns, rowCount}
  }

  render () {
    return (<div>
      <Input rowCount={this.state.rowCount}/>
      <Board board={this.state.board}/>
    </div>)
  }
}

export default App
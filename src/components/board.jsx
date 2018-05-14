import React from 'react'
import PropTypes from 'prop-types'
import Row from './row'

const Board = ({board}) => {
  return (
    <div>
      <table cellSpacing="5">
        <tbody>
        {
          board.map((row, index) => {
            return <Row row={row} key={index}/>
          })
        }
        </tbody>
      </table>
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
}

export default Board
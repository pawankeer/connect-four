import React from 'react'
import PropTypes from 'prop-types'
import Hole from './hole'

const Row = ({row}) => {
  return (
    <tr>
      {
        row.map((value, index) => {
          return <Hole value={value} key={index}/>
        })
      }
    </tr>
  )
}

Row.propTypes = {
  row: PropTypes.array.isRequired,
}

export default Row
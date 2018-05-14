import React from 'react'
import PropTypes from 'prop-types'

const Hole = ({value}) => {
  return (
    <td>{value}</td>
  )
}

Hole.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Hole
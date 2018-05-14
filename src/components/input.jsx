import React from 'react'
import PropTypes from 'prop-types'

const Input = ({rows}) => {
  return (<div>{
    rows.map((row, index) => {
      return <input type='button' key={index}/>
    })
  }</div>)
}

Input.propTypes = {
  rows: PropTypes.array.isRequired,
}

export default Input
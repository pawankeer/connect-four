import React from 'react'
import PropTypes from 'prop-types'

const Input = ({rowCount}) => {
  const createOptions = (rc) => {
    const options = [];
    for (let i = 0; i < rc; i++) {
      options.push(<input type='button' key={i}/>)
    }
    return options;
  }

  return (<div>{createOptions(rowCount)}</div>)
}

Input.propTypes = {
  rowCount: PropTypes.number.isRequired,
}

export default Input
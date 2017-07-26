import React from 'react'
import PropTypes from 'prop-types'

const Col = (props) => {
  const colStyles = {
    display: 'inline-block',
    minWidth: `${(props.size / 12) * 100}%`,
    maxWidth: '100%',
    width: `calc((${props.breakpoint}px - 100%) * ${props.breakpoint})`
  }

  return <div {...props} style={colStyles} />
}

Col.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  breakpoint: PropTypes.number
}

Col.defaultProps = {
  size: 12,
  breakpoint: 640
}

export default Col

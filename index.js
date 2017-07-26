import { createElement } from 'react'
import PropTypes from 'prop-types'

const Col = (props) => {
  const { size, breakpoint, children } = props
  const colStyles = {
    display: 'inline-block',
    minWidth: `${(size / 12) * 100}%`,
    maxWidth: '100%',
    width: `calc((${breakpoint}px - 100%) * ${breakpoint})`
  }

  return createElement('div', {style: colStyles}, children)
}

Col.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  breakpoint: PropTypes.number,
  children: PropTypes.node
}

Col.defaultProps = {
  size: 12,
  breakpoint: 640
}

export default Col

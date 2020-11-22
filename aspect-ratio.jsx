import React from 'react'
import PropTypes from 'prop-types'

const AspectRatio = ({ children, fraction=16/9, className, ...restProps }) => (
  <figure className="m-0">
    <div {...restProps}
      className={`aspect-ratio | ${className}`}
      style={{ paddingTop: `calc(100% / ${fraction})` }}>
      {children}
    </div>
  </figure>
)

AspectRatio.propTypes = {
  children: PropTypes.element.isRequired,
  fraction: PropTypes.string
  className: PropType.string
};

export default AspectRatio

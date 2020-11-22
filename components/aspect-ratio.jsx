import React from 'react'
import PropTypes from 'prop-types'

const AspectRatio = ({ children, className='aspect-ratio-16:9' }) => (
  <figure className="m-0">
    <div className={`overflow-hidden | relative ${className}`}>
      {children('absolute inset-0 | block | w-100 h-100 | object-cover')}
    </div>
  </figure>
)

AspectRatio.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string
};

export default AspectRatio

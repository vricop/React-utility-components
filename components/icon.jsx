import React from 'react'
import master from '../assets/img/master.svg'
import PropTypes from 'prop-types'

const Icon = ({ name, width=16, height, aspectRatio=1, ...restProps }) => {
  console.log({width, height, aspectRatio})

  // [ If $width is set ] [ $height is not ] [ and $aspectratio is set ] [ then apply $aspectRatio ]
  if (width !== undefined && height === undefined && aspectRatio !== undefined) {
    height = width / aspectRatio
  // [ If $height isn't set then set $height with $width value ] 
  } else if (height === undefined) {
    height = width
  }

  console.log(width !== undefined && height === undefined && aspectRatio !== undefined)

  return (
    <svg 
      aria-hidden="true"
      focusable="false"
      role="img"
      width={width}
      height={height}
      className="fill-currentColor pointer-events-none" {...restProps}>
      <use href={`${master}#${name}`} />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Icon

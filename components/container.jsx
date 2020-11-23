import React from 'react'
import PropTypes from 'prop-types'

/*
 * @as: html elementy type
 * @children: html elements
 */
const Container = ({ as='div', children, className='', ...restProps }) => {
  const Tag = as
  const defaultClassName = 'container mx-auto'
  
  className = className !== ''
    ? `${defaultClassName} | ${className}`
    : defaultClassName

  return (
    <Tag className={className} {...restProps}>
      {children}
    </Tag>
  )
}

Container.propTypes = {
  as: PropTypes.string,
  children: PropTypes.element.isRequired,
  className: PropTypes.string
};

export default Container

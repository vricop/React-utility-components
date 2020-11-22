import React from 'react'
import PropTypes from 'prop-types'

/*
 * @as: html elementy type
 * @children: html elements
 */
const Container = ({ as='div', children, className, ...restProps }) => {
  const Tag = as

  return (
    <Tag className={`container mx-auto | ${className}`} {...restProps}>
      {children}
    </Tag>
  )
}

Container.propTypes = {
  as: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Container

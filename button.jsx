import React from 'react'
import PropTypes from 'prop-types'

/*
 * @as: Html elementy type
 * @children: text
 * @background: PetricorCSS `bg-*` utility classes (including variants)
 * @color: PetricorCSS `text-*` utility classes (including variants)
 * @shape: PetricorCSS `rounded-*` utility classes (including variants)
 * @href: URL
 */
const Button = ({ as='a', children, background='bg-black', color='text-white', shape='rounded', href, ...restProps }) => {
  const Tag = href ? 'a' : as

  return (
    <Tag
      href={as==='a' && href}
      className={`${background} | ${color} font-medium | inline-block px-6(em) py-2(em) | leading-8(em) | ${shape} | transition duration-200ms`}
      {...restProps}>
      {children}
    </Tag>
  )
}

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.element.isRequired,
  href: PropTypes.string
};

export default Button

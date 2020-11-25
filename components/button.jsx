import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../components/icon'

const Button = (props) => {
  // Defaults
  let {
    as='a',
    background='bg-info-500 hover:bg-info-700',
    children,
    className,
    color='text-white',
    href,
    icon,
    label,
    shape='rounded-lg',
    ...restProps
  } = props

  // Tag type
  const Tag = href ? 'a' : as

  const presetClassName = `
    inline-flex items-center | stack-gap-x-3 | font-medium |
    px-6(em) py-2(em) | leading-8(em) | transition duration-200ms
  `.trim()

  // Join user defined className props with preset class
  className = [presetClassName, background, color, shape, className ].join(' | ')

  return (
    <Tag href={as==='a' && href} className={className} {...restProps}>
      {icon && <Icon name={icon} />} <span>{children || label}</span>
    </Tag>
  )
}

Button.propTypes = {
  as: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  className: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.string
};

export default Button

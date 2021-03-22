import PropTypes from 'proptypes'

export default function Show({ when:condition=null, children, otherwhise=null, component }) {
  if(condition) component || children || null
  return otherwhise || null
}

Show.proptypes = {
  when: PropTypes.bool.isRequired,
}

/*
  Usage:

  1) As a properties
  
  <Show when={true} component={<MyComponentA /> otherwise={<MyComponentB />} />

  2) As a children
  
  <Show when={true} otherwhise={<MyComponentB />}>
    <MyComponentA />
  </Show>
*/

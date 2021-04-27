import { useState } from 'react'

/**
 * Handle fields in controlled forms using state
 * @param {any} initialState - Initial state for the controlled fields element
 * @returns Array(any, function) - Returns the current state, `fields` and a
 * function handler for event `handleFields`, that takes an event object as
 * argument.
 */
export default function useControlledFields(initialState = {}) {
  const [fields, setFields] = useState(initialState)

  const handleFields = ({ currentTarget }) => {
    const { name, value } = currentTarget

    setFields({
      ...fields,
      [name]: value,
    })
  }

  return [fields, handleFields, setFields]
}

import { useState } from 'react'

/**
 * Handle fields in controlled forms using state
 * @param {any} initialState - Initial state for the controlled input element
 * @returns Array(any, function) - Returns the current state, `input` and a 
 * function handler for event `handleInputChange`, that takes an event object as
 * argument.
 */
export default function useInputChange(initialState) {
  const [input, setInput] = useState(initialState)

  const handleInputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget

    setInput({
      ...input,
      [name]: value,
    })
  }

  return [input, handleInputChange]
}

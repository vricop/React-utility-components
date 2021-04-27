import { useState } from 'react'

/**
 * Controlled input elements with a custom hook
 * @param {any} initialValue - Initial value for the controlled input element
 * @returns Array(any, function) - Returns the current state and de
 * setNameOfState function
 * to update the state
 */
export default function useInputChange(initialValue) {
  const [input, setInput] = useState(initialValue)

  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    })

  return [input, handleInputChange]
}

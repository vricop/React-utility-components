import { useState } from 'react'

/**
 * Handle fields in controlled form components using state
 * @param {object} [initialState={}] - Initial state for the controlled fields element
 * @return Object with methods: {fields, handleFields, handleGroupedFields, setFields}
 */
export default function useControlledFields(initialState = {}) {
  const [fields, setFields] = useState(initialState)

  /**
   * Toggles the `checked` attribute from a node element
   * @param {object} currentTarget An html node
   * @param {string} type The type of `input` (checkbox, radio...)
   * @param {bool} checked The booleand value from the `checked` attribute 
   */
  const toggleCheckAttribute = ({ currentTarget, type, checked }) => {
    /*
      If form currentTarget is either checkbox or radio toggle the checked
      attribute
    */
    if (/(checkbox|radio)/.test(type)) {
      currentTarget.setAttribute(type, !checked)
    }
  }

  /**
   * Updates the fields `state` from a group of different inputs automatically
   * when a listener is triggered
   * @param {object} { currentTarget } The Event object from the listener
   */
  const handleGroupedFields = ({ currentTarget }) => {
    const { name, value, checked, type } = currentTarget

    toggleCheckAttribute({ currentTarget, type, checked })

    // 1. Keep current fields values, if empty default to []
    const currentFieldsState = [...(fields && fields[name] ? fields[name] : [])]
    // 2. Use `add` or `delete` method  based on the checked value from the input
    const toggle = checked ? 'add' : 'delete'
    // 3. Create a new set based on current fields `state`
    const fieldSet = new Set([...currentFieldsState])
    // 4. Add/delete the new value based on 2.
    fieldSet[toggle](value)

    setFields({
      ...fields,
      [name]: fieldSet,
    })
  }

  const handleFields = ({ currentTarget }) => {
    const { name, value, checked, type } = currentTarget

    toggleCheckAttribute({ currentTarget, type, checked })

    setFields({ ...fields, [name]: value })
  }

  return { fields, handleFields, handleGroupedFields, setFields }
}

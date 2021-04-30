import { useState } from 'react'

/**
 * Handle fields in controlled form components using state
 * @param {object} [initialState={}] - Initial state for the controlled fields element
 * @return Object with methods: {fields, handleFields, handleGroupedFields, setFields}
 */
export default function useControlledFields(initialState = {}) {
  const [fields, setFields] = useState(initialState)

  /**
   * Updates the fields `state` from a group of different inputs automatically
   * when a listener is triggered
   * @param {object} { currentTarget } The Event object from the listener
   */
  const handleGroupedFields = ({ currentTarget }) => {
    const { name, value, checked } = currentTarget

    /**
     * 1. Keep a copy of the current field values, if empty default to []
     * 2. Use `add` or `delete` method  based on the `checked` attribute
     * 3. Create a new set based on current fields `state`
     * 4. Add/delete the new value based on the `checked` attribute
     * 5. Update state
     */
    const currentFieldsState = [...(fields && fields[name] ? fields[name] : [])]
    const toggle = checked ? 'add' : 'delete'
    const fieldSet = new Set([...currentFieldsState])
    fieldSet[toggle](value)

    setFields({
      ...fields,
      [name]: fieldSet,
    })
  }

  const handleFields = ({ currentTarget }) => {
    const { name, value } = currentTarget
    setFields({ ...fields, [name]: value })
  }

  return { fields, handleFields, handleGroupedFields, setFields }
}

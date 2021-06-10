import { useReducer } from 'react'

export const ACTIONS = {
  ACTION_NAME: 'actionName',
}

const REDUCER_ACTIONS = {
  [ACTIONS.ACTION_NAME]: (state, payload) => ({}),
}

const reducer = (state, action) => {
  const reducerAction = REDUCER_ACTIONS[action.type]
  return reducerAction ? reducerAction(state, action) : state
}

/**
 * Custom hook for `useReducer` hook
 * @param {any} initialState - The initial state
 * @returns {any} The state and decorated dispatch functions to update the state
 */
export default function useFormHook(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Functions that decorate the `dispatch` function eg.
  const updateActionName = () => {
    dispatch({ type: ACTIONS.ACTION_NAME, payload: 'My data' })
  }

  return {
    state,
    updateActionName,
  }
}

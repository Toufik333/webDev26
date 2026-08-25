import { useReducer } from 'react'

function reducer(state, action) {
  // Actions describe intent; the reducer decides the next state.
  if (action.type === 'increment') return { ...state, count: state.count + 1 }
  if (action.type === 'decrement') return { ...state, count: state.count - 1 }
  if (action.type === 'reset') return { count: 0 }
  return state
}

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return <div><h2>Reducer for related updates</h2><p>A reducer keeps update rules in one pure function. This is useful when a component has several related actions.</p><div className="example-row"><strong>Count: {state.count}</strong><button className="action" onClick={() => dispatch({ type: 'increment' })}>+</button><button className="action secondary" onClick={() => dispatch({ type: 'decrement' })}>-</button><button className="action secondary" onClick={() => dispatch({ type: 'reset' })}>Reset</button></div></div>
}

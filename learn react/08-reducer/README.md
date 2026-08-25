# Reducer

`useReducer` returns state and a `dispatch` function. Dispatch sends an action to a pure reducer, which returns the next state without mutating the old state.

Reducers make transitions explicit and easy to test. Use them when state fields change together or there are several named actions. For one simple value, `useState` is usually clearer.

A reducer should not perform network calls or other side effects. Keep those outside the reducer, typically in an event handler or effect.

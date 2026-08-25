# Custom hooks

A custom hook is a function whose name starts with `use` and that can call other hooks. `useOnlineStatus` owns browser event wiring and cleanup, while the component only receives a boolean and chooses what to render.

Hooks must be called at the top level of a component or another hook, never inside a loop or condition. Extract a hook when the behavior is reusable, not just to make a single short component look smaller.

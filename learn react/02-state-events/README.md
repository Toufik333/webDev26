# State and events

`useState` returns the current value and a setter. Calling the setter asks React to render again with the new value.

The updater form, `setCount((currentCount) => currentCount + 1)`, is safest when the next value depends on the previous value. Event handlers are passed as functions, so use `onClick={addOne}`, not `onClick={addOne()}`.

Keep state as small as possible. If a value can be calculated from existing state or props, calculate it during render instead of storing a duplicate.

# Lists and conditional rendering

Use `map` to turn an array into elements. Every sibling from a list needs a stable `key`; an id is better than an array index when items can change.

JSX supports normal JavaScript expressions. This example uses a ternary for the empty/completed message and a conditional symbol for each task. The update maps over the old array and creates a new task object, preserving React's immutable state pattern.

Try adding an empty array and render a useful empty state with `tasks.length === 0`.

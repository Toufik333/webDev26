# Components and props

A component is a JavaScript function that returns JSX. Keep a component focused on one piece of UI, then compose several components into a page.

`ProfileCard` receives `name`, `role`, and `available` as props. Props are read-only inputs: the parent owns the data and the child decides how to display it. The `key` helps React track each item when rendering the array.

Try changing the `people` array or adding a prop such as `location`. Avoid putting unrelated application logic into the card.

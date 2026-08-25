# Controlled forms

A controlled input gets its value from React state and reports edits through `onChange`. That makes the current value available for validation, previews, and submission.

`preventDefault` keeps a normal form submit from navigating away. The browser's `required` and `type="email"` validation still provide a useful baseline; real forms often add server-side validation too.

For larger forms, keep related fields in one object or use a form library once repeated validation becomes distracting from the feature.

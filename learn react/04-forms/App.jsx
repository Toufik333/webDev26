import { useState } from 'react'

export default function Forms() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault() // Stop the browser from reloading the page.
    setSubmitted(true)
  }

  return <div><h2>Controlled forms</h2><p>React owns the input value, so validation and submission can use the same source of truth.</p><form onSubmit={handleSubmit} className="example-row"><label htmlFor="email">Email</label><input id="email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false) }} placeholder="you@example.com" required /><button className="action" type="submit">Subscribe</button></form>{submitted && <p className="status">Thanks. We will send updates to {email}.</p>}</div>
}

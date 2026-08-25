import { useState } from 'react'

export default function StateEvents() {
  // State belongs to this component because the counter is local UI data.
  const [count, setCount] = useState(0)

  function addOne() {
    setCount((currentCount) => currentCount + 1)
  }

  return <div><h2>State and events</h2><p>State remembers values between renders. Event handlers update state in response to user actions.</p><div className="example-row"><strong>Clicks: {count}</strong><button className="action" onClick={addOne}>Add one</button><button className="action secondary" onClick={() => setCount(0)}>Reset</button></div></div>
}

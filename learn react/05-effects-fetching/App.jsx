import { useEffect, useState } from 'react'

export default function EffectsFetching() {
  const [status, setStatus] = useState('Loading a tip...')

  useEffect(() => {
    const timer = window.setTimeout(() => setStatus('Effects run after render. This simulated request finished.'), 900)
    return () => window.clearTimeout(timer) // Cleanup prevents updates after unmount.
  }, [])

  return <div><h2>Effects and async work</h2><p>Use an effect to synchronize with something outside React, such as a timer, subscription, or network request.</p><p className="status">{status}</p></div>
}

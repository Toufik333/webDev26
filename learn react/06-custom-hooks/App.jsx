import { useOnlineStatus } from './useOnlineStatus.js'

export default function CustomHooks() {
  // The component consumes behavior without knowing about browser events.
  const isOnline = useOnlineStatus()
  return <div><h2>Custom hooks</h2><p>A custom hook packages reusable stateful behavior while leaving each component in control of its UI.</p><p className="status">{isOnline ? 'Your browser is online.' : 'Your browser is offline.'}</p></div>
}

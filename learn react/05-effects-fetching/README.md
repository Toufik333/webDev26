# Effects and fetching

`useEffect` runs after React updates the screen. An empty dependency array means this effect starts when the component mounts and cleans up when it unmounts.

The timer stands in for a request so the lesson works offline. In a real fetch effect, track loading, success, and error states, abort the request in cleanup, and check the response before parsing it. Do not use effects to calculate values that can be derived during render.

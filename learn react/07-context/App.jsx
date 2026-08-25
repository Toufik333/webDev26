import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext('light')

function ThemeButton() {
  const theme = useContext(ThemeContext)
  return <button className="action" onClick={() => alert(`The current theme is ${theme}.`)}>Read shared theme</button>
}

export default function Context() {
  const [theme, setTheme] = useState('light')
  // The provider makes this value available to every descendant.
  return <ThemeContext.Provider value={theme}><div><h2>Context</h2><p>Context is useful for values many descendants need, such as a theme, locale, or signed-in user.</p><div className="example-row"><span className="status">Current theme: {theme}</span><button className="action secondary" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle theme</button><ThemeButton /></div></div></ThemeContext.Provider>
}

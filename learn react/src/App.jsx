import { useState } from 'react'
import ComponentsProps from '../01-components-props/App.jsx'
import StateEvents from '../02-state-events/App.jsx'
import ListsConditional from '../03-lists-conditional/App.jsx'
import Forms from '../04-forms/App.jsx'
import EffectsFetching from '../05-effects-fetching/App.jsx'
import CustomHooks from '../06-custom-hooks/App.jsx'
import Context from '../07-context/App.jsx'
import Reducer from '../08-reducer/App.jsx'

const lessons = [
  ['01', 'Components + props', ComponentsProps],
  ['02', 'State + events', StateEvents],
  ['03', 'Lists + conditions', ListsConditional],
  ['04', 'Forms', Forms],
  ['05', 'Effects + fetching', EffectsFetching],
  ['06', 'Custom hooks', CustomHooks],
  ['07', 'Context', Context],
  ['08', 'Reducer', Reducer],
]

export function App() {
  const [activeLesson, setActiveLesson] = useState(lessons[0][0])
  const Lesson = lessons.find(([number]) => number === activeLesson)[2]

  return (
    <main className="shell">
      <header className="hero">
        <p className="eyebrow">React field notes</p>
        <h1>Learn the patterns you will actually use.</h1>
        <p>Eight small examples. One idea at a time. Open the README beside each folder for the reasoning.</p>
      </header>
      <nav className="lesson-nav" aria-label="React lessons">
        {lessons.map(([number, title]) => (
          <button className={activeLesson === number ? 'active' : ''} key={number} onClick={() => setActiveLesson(number)}>
            <span>{number}</span>{title}
          </button>
        ))}
      </nav>
      <section className="lesson-panel"><Lesson /></section>
    </main>
  )
}

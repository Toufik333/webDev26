import { useState } from 'react'

const initialTasks = [{ id: 1, title: 'Read the lesson README', done: true }, { id: 2, title: 'Change one example', done: false }, { id: 3, title: 'Build something small', done: false }]

export default function ListsConditional() {
  const [tasks, setTasks] = useState(initialTasks)
  const remaining = tasks.filter((task) => !task.done).length

  function toggleTask(id) {
    // Return a new array instead of mutating the existing state.
    setTasks((currentTasks) => currentTasks.map((task) => task.id === id ? { ...task, done: !task.done } : task))
  }

  return <div><h2>Lists and conditional rendering</h2><p>{remaining === 0 ? 'Everything is complete.' : `${remaining} task${remaining === 1 ? '' : 's'} left`}</p><div className="card-grid">{tasks.map((task) => <button className="mini-card" key={task.id} onClick={() => toggleTask(task.id)}>{task.done ? '✓ ' : '○ '}{task.title}</button>)}</div></div>
}

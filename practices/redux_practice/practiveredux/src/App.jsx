import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, toggleTodo, clearCompleted } from './redux/todoSlice'

function App() {
  const [text, setText] = useState('')
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const remainingCount = todos.filter((todo) => !todo.completed).length

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text))
      setText('')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAddTodo()
  }

  return (
    <main className="todo-app">
      <header className="todo-header">
        <p className="eyebrow">Daily focus</p>
        <h1>Todo App</h1>
        <p className="subtitle">Keep the important things moving.</p>
      </header>

      <form className="todo-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="todo-input">New todo</label>
        <input
          id="todo-input"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="What needs doing?"
        />
        <button type="submit">Add todo</button>
      </form>

      <section className="todo-list" aria-live="polite">
        <div className="list-heading">
          <h2>Your tasks</h2>
          <span>{remainingCount} remaining</span>
        </div>
        {todos.length === 0 ? (
          <p className="empty-state">Nothing here yet. Add your first task above.</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li className={todo.completed ? 'completed' : ''} key={todo.id}>
                <button
                  className="complete-button"
                  type="button"
                  aria-label={todo.completed ? `Mark ${todo.text} incomplete` : `Mark ${todo.text} complete`}
                  onClick={() => dispatch(toggleTodo(todo.id))}
                >
                  {todo.completed ? '✓' : ''}
                </button>
                <span>{todo.text}</span>
                <button className="remove-button" type="button" onClick={() => dispatch(removeTodo(todo.id))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {todos.some((todo) => todo.completed) && (
        <button className="clear-button" type="button" onClick={() => dispatch(clearCompleted())}>
          Clear completed
        </button>
      )}
    </main>
  )
}

export default App

import { useState } from "react";
import "./styles.css"

export default function App() {

  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  //newItem="abc"; We cannot use it like this in React. This variable is immutable. Instead you can use setNewItem("abc")

  //setNewItem("abc") - This will set the state and rerenders the App component. But since it is used here, it will rerender over and over again - infinite loop. Instead, we want to set this once if the state changes.


  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }

      ]
    })

    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          //todo.completd=completed; <- This doesn't work. Immutable
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }

  return <>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Item to add</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text" id="item" />
      </div>
      <button >Add</button>
    </form>
    <h6 className="header">Items to do</h6>
    <ul className="list">
      {todos.length === 0 && "To do list is empty"}
      {todos.map(todo => {
       return <li key={todo.id}>
          <label>
            <input type="checkbox"
              checked={todo.completed}
              onChange={e => toggleTodo(todo.id, e.target.checked)}
            />
            {todo.title}
          </label>
          <button
            //onClick={deleteTodo(todo.id)}  - It executes and sets the result to onClick event. This is not what we expect
            onClick={() => deleteTodo(todo.id)}
            >Delete</button>
        </li>
      })}

    </ul>
  </>
}

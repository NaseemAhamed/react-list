import { useEffect, useState } from "react";
import "./styles.css"
import ItemForm from "./ItemForm";
import { List } from "./List";

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localTodos=localStorage.getItem("ITEMS");
    if(localTodos==null) return []

    return JSON.parse(localTodos);
  })

  //We can't do useEffect conditionally or with loops
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  //newItem="abc"; We cannot use it like this in React. This variable is immutable. Instead you can use setNewItem("abc")

  //setNewItem("abc") - This will set the state and rerenders the App component. But since it is used here, it will rerender over and over again - infinite loop. Instead, we want to set this once if the state changes.


  function addTodo(title) {
    setTodos(currentTodos => [...currentTodos, { id: crypto.randomUUID(), title, completed: false }])
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
    <ItemForm addToDoHandler={addTodo} />
    <h6 className="text-2xl font-extrabold text-white mt-6 mb-4">Items to do</h6>
    <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
}

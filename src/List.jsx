import { Item } from "./Item"

export function List({ todos, toggleTodo, deleteTodo }) {

    return <ul className="list">
        {todos.length === 0 && "To do list is empty"}
        {todos.map(todo => {
            return <Item
            {...todo}
                // id={todo.id}
                // completed={todo.completed}
                // title={todo.title}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        })}

    </ul>
}

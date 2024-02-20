export function Item({ id, completed, title,  toggleTodo, deleteTodo}) {
    return <li>
        <label>
            <input type="checkbox"
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            {title}
        </label>
        <button
            //onClick={deleteTodo(id)}  - It executes and sets the result to onClick event. This is not what we expect
            onClick={() => deleteTodo(id)}
        >Delete</button>
    </li>
}
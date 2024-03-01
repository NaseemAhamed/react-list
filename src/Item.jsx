export function Item({ id, completed, title,  toggleTodo, deleteTodo}) {
    return <li className="mb-4">
        <label className="flex items-center">
            <input type="checkbox"
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            {title}
        </label>
        <button className="bg-red-500 text-white px-2 ml-2 rounded"
            //onClick={deleteTodo(id)}  - It executes and sets the result to onClick event. This is not what we expect
            onClick={() => deleteTodo(id)}
        >x</button>
    </li>
}
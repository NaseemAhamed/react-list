import { useState } from "react";

export default function ItemForm({addToDoHandler}) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        addToDoHandler(newItem);
        //Commenting this out because todo has to live in App.jsx because it is used for viewing there.

        // setTodos((currentTodos) => {
        //   return [
        //     ...currentTodos,
        //     {
        //       id: crypto.randomUUID(),
        //       title: newItem,
        //       completed: false
        //     }

        //   ]
        // })

        setNewItem("")
    }
    return <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">Item to add</label>
            <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text" id="item" />
        </div>
        <button>Add</button>
    </form>
}
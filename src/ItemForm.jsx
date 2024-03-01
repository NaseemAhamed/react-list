import { useState } from "react";

export default function ItemForm({ addToDoHandler }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();


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
        if (newItem.trim() != "") {
            addToDoHandler(newItem);
            setNewItem("")
        }
    }
    return <form onSubmit={handleSubmit} className="new-item-form mb-4">
        <div className="form-row mb-2">
            <label htmlFor="item" className="text-white mr-2">Item to add</label>
            <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text" id="item" />
        </div>
        <button className="bg-blue-500 text-white px-2 py-1 rounded">Add</button>
    </form>
}
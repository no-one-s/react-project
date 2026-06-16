import { useState, useContext, useEffect } from "react";
import { TodoContext } from "../contexts/TodoContext";
function TodoItem({ todo }) {
    const { updateTodo, deleteTodo, toggleTodo } = useContext(TodoContext);
    const [isEditable, setIsEditable] = useState(false);
    const [editText, setEditText] = useState(todo.todo);

    useEffect(() => {
        setEditText(todo.todo);
    }, [todo.todo]);

    const saveEdit = () => {
        if (editText.trim() === "") return;
        updateTodo(todo.id, { ...todo, todo: editText });
        setIsEditable(false);
    };

    const toggleCompleted = () => {
        toggleTodo(todo.id);
    };

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={isEditable ? editText : todo.todo}
                onChange={(e) => setEditText(e.target.value)}
                readOnly={!isEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isEditable) {
                        saveEdit();
                    } else {
                        setIsEditable(true);
                    }
                }}
                disabled={todo.completed}
            >
                {isEditable ? "💾" : "✏️"}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
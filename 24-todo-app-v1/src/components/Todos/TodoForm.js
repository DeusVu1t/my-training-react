import { useState } from "react";
import TodoList from "./TodoList";

function TodoForm() {
    const [data, setTodo] = useState({ todo: '' });

    function handleFormSubmit(event) {
        event.preventDefault();
        const { todo } = data;
        console.log(data);

        setTodo({ ...data, todo: '' });
    }

    function handleInputChange(event, todo) {
        setTodo({ ...data, [todo]: event.target.value });
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    className="todo-input"
                    type="text"
                    value={data.todo}
                    onChange={(event) => handleInputChange(event, 'todo')}
                />
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
            {/* Передача только свойства todo */}
            <TodoList todo={data.todo} />
        </div>
    );
}

export default TodoForm;

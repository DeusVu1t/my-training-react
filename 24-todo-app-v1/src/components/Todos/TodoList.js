function TodoList(props) {
    const { todo } = props;
    
    return (
        <div className="todolist">
            <p>Значение todo: {todo}</p>
        </div>
    );
}

export default TodoList;

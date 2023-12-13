function Todo(props) {
    const {setTodo} = props

   return <div className="single-todo">    
        <div className="ico"></div>
        <p>{setTodo}</p>
    </div>

}

export default Todo
import React, {useState} from 'react'
import TodoForm  from './TodoForm'

function EditTodo() {

    const [text, setText] = useState('')
    const [day, setDay] = useState();
    const [time, setTime] = React.useState<Date | null>(new Date());

    const projects = [
        {id : 1, name: "personal", numOfTodos : 0 },
        {id : 2, name: "work", numOfTodos : 1 },
        {id : 3, name: "other", numOfTodos : 2 }
    ]
     
    function handleSubmit(e) {

    }

    return (
        <div className='EditTodo'>
            <div className="header">
                Edit Node
            </div>
            <div className="container">
            <TodoForm
                handleSubmit={handleSubmit}
                heading=''
                text={text}
                setText={setText}
                day={day}
                setDay={setDay}
                time={time}
                setTime={setTime}
                projects={projects}
                showButtons={false}
                setShowModal={false}
                />
            </div>
        </div>
    )
}

export default EditTodo
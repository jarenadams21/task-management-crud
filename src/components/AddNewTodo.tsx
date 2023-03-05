import React, {useState, useContext} from 'react'
import Modal from './Modal'
import TodoForm from './TodoForm'
import {TodoContext} from '../context'


function AddNewTodo() {
    //CONTEXT
    const {selectedProject} = useContext(TodoContext)

    //STATE
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [day, setDay] = React.useState<Date | null>(new Date());
    const [time, setTime] = React.useState<Date | null>(new Date());
    const [todoProject, setTodoProject] = useState(selectedProject)

    setTodoProject(selectedProject)

    const projects = [
        {id : 1, name: "personal", numOfTodos : 0 },
        {id : 2, name: "work", numOfTodos : 1 },
        {id : 3, name: "other", numOfTodos : 2 }
    ]
     
    function handleSubmit(e) {

    }

    return (
        <div className='AddNewTodo'>
            <div className="btn">
            <button onClick={ () => setShowModal(true)}>
                + Update Personal Hypergraph
            </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <TodoForm
                handleSubmit={handleSubmit}
                heading='Add new node'
                text={text}
                setText={setText}
                day={day}
                setDay={setDay}
                time={time}
                setTime={setTime}
                todoProject={todoProject}
                setTodoProject={setTodoProject}
                projects={projects}
                showButtons={true}
                setShowModal={setShowModal}
                />
            </Modal>
        </div>
    )
}

export default AddNewTodo
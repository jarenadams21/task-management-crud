import React, {useState} from 'react'
import {AiFillUpCircle, AiOutlineUpCircle} from 'react-icons/ai'
import {MdOutlineChangeCircle} from 'react-icons/md'
import {BsTrash3} from 'react-icons/bs'

function Todo({todo}) {
    const [hover, setHover] = useState(false)

    return (
        <div className='Todo'>
            <div className="todo-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className="check-todo">
                    {
                        todo.checked ?
                        <span className="checked">
                            <AiFillUpCircle size={30} color="#bebebe"/>
                        </span>
                        :
                        <span className="unchecked">
                            <AiOutlineUpCircle size={30} color={todo.color}/>
                        </span>
                    }
                </div>
                <div className="text">
                    <p style={{color : todo.checked ? '#bebebe' : '#000000'}}>{todo.text}</p>
                    <span>{todo.time} - {todo.projectName}</span>
                    <div className={`line ${todo.checked ? 'line-through' : ''}`}/>
                </div>
                <div className="add-to-next-day">
                    {
                        todo.checked && 
                        <span>
                            <MdOutlineChangeCircle size={30}/>
                        </span>

                    }
                </div>
                <div className="delete-todo">
                    {
                        (hover || todo.checked) && 
                        <span>
                            <BsTrash3 size={30}/>
                        </span>
                    }

                </div>
            </div>
        </div>
    )
}

export default Todo
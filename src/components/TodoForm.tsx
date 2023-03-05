import React from 'react'
import { setTextRange } from 'typescript'
import {TiTime} from 'react-icons/ti'
import {RxCalendar} from 'react-icons/rx'
import {GiTreeDoor} from 'react-icons/gi'
import {GrProjects} from 'react-icons/gr'
import {FcCancel} from 'react-icons/fc'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function TodoForm({
    handleSubmit,
    heading,
    text, setText,
    day, setDay,
    time, setTime,
    todoProject, setTodoProject,
    projects,
    showButtons = false,
    setShowModal,
}) {

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <form onSubmit={handleSubmit} className="TodoForm">
                    <div className="text">
                        {
                            heading &&
                            <h3>{heading}</h3>
                        }
                        <input
                        type='text'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder='New task...'
                        autoFocus
                        />
                    </div>
                    <div className="remind">
                        <GiTreeDoor/>
                        <p>Remind Me</p>
                    </div>
                    <div className="pick-day">
                        <div className="title">
                            <RxCalendar/>
                            <p>Choose a day</p>
                        </div>
                        <DatePicker
                        value={day}
                        onChange={day => setDay(day)}
                        />
                    </div>
                    <div className="pick-time">
                        <div className="title">
                            <TiTime/>
                            <p>Choose a time</p>
                        </div>
                        <TimePicker
                        value={time}
                        onChange={time => setTime(time)}
                        />

                    </div>
                    <div className="pick-project">
                        <div className="title">
                            <GrProjects/>
                            <p>Choose a project</p>
                        </div>
                        <div className="projects">
                            {
                                projects.map( project =>

                                    <div className={`project ${todoProject === project.name ? "active" : ""}`}
                                    key={project.id}
                                    onClick={() => setTodoProject(project.name)}
                                    >
                                        {project.name}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {
                        showButtons &&
                        <div>
                            <div className="cancel" onClick={() => setShowModal(false)}>
                                <FcCancel size={40}/>
                            </div>
                             <div className="confirm">
                                 <button>+ Add to graph</button>
                             </div>
                        </div>
                    }
                </form>
                </MuiPickersUtilsProvider>
    )
}

export default TodoForm
import React, {useState} from 'react'
import { setTextRange } from 'typescript'
import Modal from './Modal'
import {TiTime} from 'react-icons/ti'
import {RxCalendar} from 'react-icons/rx'
import {GiTreeDoor} from 'react-icons/gi'
import {GrProjects} from 'react-icons/gr'
import {FcCancel} from 'react-icons/fc'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function AddNewTodo() {
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [day, setDay] = React.useState<Date | null>(new Date());
    const [time, setTime] = React.useState<Date | null>(new Date());
     
    return (
        <div className='AddNewTodo'>
            <div className="btn">
            <button onClick={ () => setShowModal(true)}>
                + Update Personal Hypergraph
            </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <form>
                    <div className="text">
                        <h3>Add new to do?</h3>
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
                            <div className="project active">
                                personal
                            </div>
                            <div className="project">
                                work
                            </div>
                        </div>
                    </div>
                    <div className="cancel" onClick={() => setShowModal(false)}>
                        <FcCancel size={40}/>
                    </div>
                    <div className="confirm">
                        <button>+ Add to graph</button>
                    </div>
                </form>
                </MuiPickersUtilsProvider>
            </Modal>
        </div>
    )
}

export default AddNewTodo
import React, {useState, useContext} from 'react'
import RenameProject from './RenameProject'
import {MdEditRoad} from 'react-icons/md'
import {FcCancel} from 'react-icons/fc'
import Modal from './Modal'
import {TodoContext} from '../context'

function Project({project, edit}) {
    // CONTEXT
    const { setSelectedProject } = useContext(TodoContext)

    //STATE
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='Project'>
            <div 
            className="name"
            onClick={() => setSelectedProject(project.name)}>
                {project.name}
            </div>
            <div className="btns">
                {
                    edit ? <div className="edit-delete">
                    <span
                     className="edit"
                     onClick={ () => setShowModal(true)}
                     >
                        <MdEditRoad size={16}/>
                    </span>
                    <span className="delete">
                        <FcCancel size={16}/>
                    </span>
                </div>
                :
                project.numOfTodos === 0 ? '' : 
                <div className="total-todos">
                    {project.numOfTodos}
                </div>
                }
                
            </div>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
            >
                <RenameProject project={project} setShowModal={setShowModal}/>
            
            </Modal>
        </div>
    )
}

export default Project
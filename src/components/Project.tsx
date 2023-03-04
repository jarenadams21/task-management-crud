import React from 'react'
import RenameProject from './RenameProject'
import {MdEditRoad} from 'react-icons/md'
import {FcCancel} from 'react-icons/fc'

function Project({project, edit}) {
    return (
        <div className='Project'>
            <div className="name">
                {project.name}
            </div>
            <div className="btns">
                {
                    edit ? <div className="edit-delete">
                    <span className="edit">
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
        </div>
    )
}

export default Project
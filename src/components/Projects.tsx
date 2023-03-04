import React, {useState} from 'react'
import AddNewProject from './AddNewProject'
import Project from './Project'
import {TiFolderOpen} from 'react-icons/ti'
import {MdEditRoad} from 'react-icons/md'
import {GiAztecCalendarSun, GiGlowingArtifact} from 'react-icons/gi'
import {MdAddTask} from 'react-icons/md'

function Projects() {

    const [showMenu, setShowMenu] = useState(true)
    const [edit, setEdit] = useState(false)
    const pencilColor = edit ? "#1EC94C" : "#000000"

    const projects = [
        {id : 1, name: "personal", numOfTodos : 0 },
        {id : 2, name: "work", numOfTodos : 1 },
        {id : 3, name: "other", numOfTodos : 2 }
    ]

    return (
        <div className='Projects'>
            <div className="header">
                <div className="title">
                    <TiFolderOpen size={40}/>
                    <p>Projects</p>
                </div>
                <div className="btns">
                    {
                        showMenu && projects.length > 0 && 
                        <span 
                        className='edit'
                        onClick={ () => { setEdit(edit => !edit) } }
                        >
                        <MdEditRoad size={30} color={pencilColor}/>
                        </span>
                    }
                    <AddNewProject/>
                    <span className='showComponent'>
                        <GiGlowingArtifact size={30}/>
                    </span>
                </div>
            </div>
            <div className="items">
                    {
                        projects.map( project => 
                                <Project
                                project={project}
                                key={project.id}
                                edit={edit}
                                />
                        )
                    }
            </div>
        </div>
    )
}

export default Projects
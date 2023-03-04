import React, {useState} from 'react'
import Project from './Project'
import ProjectForm from './ProjectForm'

function RenameProject({project, setShowModal}) {

    const [newProjectName, setNewProjectName] = useState('')

    function handleSubmit(e) {

    }

    return (
        <div className='RenameProject'>
            <ProjectForm
                handleSubmit={handleSubmit}
                heading='Edit Node Name'
                value={project.name}
                setValue={setNewProjectName}
                setShowModal={setShowModal}
                confirmButtonText='Confirm'
                />
        </div>
    )
}

export default RenameProject
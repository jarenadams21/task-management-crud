import React, {useState} from 'react'
import {MdAddTask} from 'react-icons/md'
import Modal from './Modal'
import ProjectForm from './ProjectForm'
import firebase from '../firebase'

function AddNewProject() {

    const [showModal, setShowModal] = useState(false)
    const [projectName, setProjectName] = useState('')
    
    function handleSubmit(e) {

        e.preventDefault()

        if(projectName) {
            const projectsRef = firebase.firestore().collection('projects')

            projectsRef
            .where('name', '==', projectName)
            .get()
            .then( querySnapshot => {

                if(querySnapshot.empty) {
                    projectsRef
                    .add(
                        {
                            name : projectName
                        }
                    )
                } else {
                    alert('Project already exists!')
                }
            })

            setShowModal(false)
            setProjectName('')
        }
    }

    return (
        <div className='AddNewProject'>
           <div className="add-button">
               <span onClick={() => setShowModal(true)}>
                    <MdAddTask size={16} />
               </span>
           </div>
           <Modal showModal={showModal} setShowModal={setShowModal}>
                <ProjectForm
                handleSubmit={handleSubmit}
                heading='New Node'
                value={projectName}
                setValue={setProjectName}
                setShowModal={setShowModal}
                confirmButtonText='+ Branch Node'
                />
           </Modal>
        </div>
    )
}

export default AddNewProject
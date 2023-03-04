import React from 'react'
import {MdAddTask} from 'react-icons/md'

function AddNewProject() {
    return (
        <div className='AddNewProject'>
           <div className="add-button">
               <span>
                    <MdAddTask size={16} />
               </span>
           </div>
        </div>
    )
}

export default AddNewProject
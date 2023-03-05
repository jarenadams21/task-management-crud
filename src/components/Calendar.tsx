import React, {useContext} from 'react'
import {GiAztecCalendarSun, GiGlowingArtifact} from 'react-icons/gi'
import {calendarContents} from '../constants'
import {TodoContext} from '../context'

function Calendar() {
    //CONTEXT
    const { setSelectedProject } = useContext(TodoContext)

    return (
        <div className='Calendar'>
            <div className="header">
                <div className="title">
                    <GiAztecCalendarSun size={50}/>
                    <p>Calendar</p>
                </div>
                <div className="btns">
                    <span>
                    <GiGlowingArtifact size={50}/>
                    </span>
                </div>
            </div>
            <div className="items">
                {
                    calendarContents.map( item => 
                     <div className="item" key={item} onClick={() => setSelectedProject(item)}>
                      {item}
                    </div>

                     )
                }
            </div>
        </div>
    )
}

export default Calendar
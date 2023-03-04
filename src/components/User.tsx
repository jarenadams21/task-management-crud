import React from 'react'
import {GiZigzagLeaf} from 'react-icons/gi'

function User() {
    return (
        <div className='User'>
            <div className="logo">
                <GiZigzagLeaf size={40}/>
            </div>
            <div className='info'>
                <p>JShape</p>
                <a href="#">Logout|</a>
            </div>
        </div>
    )
}

export default User
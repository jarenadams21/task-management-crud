import React from 'react'
import logo from './images/woodstock.jpeg'

function User() {
    return (
        <div className='User'>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className='info'>
                <p>JShape</p>
                <a href="#">Logout|</a>
            </div>
        </div>
    )
}

export default User
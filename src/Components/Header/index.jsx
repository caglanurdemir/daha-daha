import React from 'react'
import './index.scss'
import Daha_Daha from '../../SVGs/Daha_Daha'
import Profile from '../../SVGs/Profile'

export default () => {
    return (
        <div className='header'>
            <Daha_Daha />
            <div className='profile'
                style={{ backgroundColor: '#000' }}>
                <Profile />
            </div>
        </div>
    )
}
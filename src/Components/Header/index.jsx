import React, { useState } from 'react'
import './index.scss'
import Daha_Daha from '../../SVGs/Daha_Daha'
import Profile from '../../SVGs/Profile'
import GirisYap from '../../SVGs/GirisYap.svg'

export default () => {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <div className='header'>
            <Daha_Daha />
            <div style={{ display: isLogin ? 'none' : 'flex', cursor: 'pointer' }}
                onClick={() => setIsLogin(true)}>
                <img src={GirisYap} />
            </div>
            {isLogin ?

                <div className='profile'
                    style={{ backgroundColor: '#F40000', cursor: 'pointer' }}
                    onClick={() => setIsLogin(false)}>
                    <Profile />
                </div>
                :
                <div className='profile'
                    style={{ backgroundColor: '#000' }}>
                    <Profile />
                </div>
            }
        </div>
    )
}
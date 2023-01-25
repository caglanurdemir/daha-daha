import React, { useState } from 'react'
import './index.scss'
import Kesfet from '../../SVGs/Kesfet'
import Portal from '../../SVGs/Portal.svg'
import Katildiklarim from '../../SVGs/Katildiklarim'

export default () => {
    return (
        <div className='footer-container'>
            <div className='footer-svg' >
                <Kesfet />
                <p className='footer-text'>KEŞFET</p>
            </div>
            <div className='footer-svg' >
                <img src={Portal} />
            </div>
            <div className='footer-svg' >
                <Katildiklarim />
                <p className='footer-text'>DAHA CÜZDAN</p>
            </div>
        </div>
    )
}
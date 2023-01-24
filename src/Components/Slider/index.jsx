import React, { useState, useEffect } from 'react'
import './index.scss'
import FirsatBul from '../../SVGs/FirsatBul.svg'

export default () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://api.extrazone.com/tags/list", {
            method: "GET",
            headers: {
                'X-Country-Id': 'TR',
                'X-Language-Id': 'TR'
            }
        })
            .then(response => response.json())
            .then((json) => {
                setData(json)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            {data &&
                <div className='slider'>
                    <div className='item-container'>
                        <div className='item'>
                            <img className='item-img' src={FirsatBul} />
                            <p className='item-name'>Firsat Bul</p>
                        </div>
                    </div>
                    {data.map((item, index) => {
                        return (
                            <div className='item-container' key={index}>
                                <div className='item'>
                                    <img className='item-img' src={item.IconUrl} />
                                    <p className='item-name'>{item.Name} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </>

    )

}
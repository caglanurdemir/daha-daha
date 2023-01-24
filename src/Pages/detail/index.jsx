import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './index.scss'
import BackButton from '../../SVGs/Back_Button'

export default () => {
  const [data, setData] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    fetch('https://api.extrazone.com/promotions?Id=' + location.state.Id, {
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
        <div className='detail-page'>
          <div className='detail-page-container'>
            <div className='dpc-image'>
              <img className='dpc-image-tag ' src={data.ImageUrl} />
              <div className='dpc-circle' style={{ backgroundColor: data.BrandIconUrl }}>
                <img src={data.BrandIconUrl} />
              </div>
              <div className='dpc-last-day'>
                <p>{data.RemainingText}</p>
              </div>
            </div>
            <p className='dpc-title' dangerouslySetInnerHTML={{ __html: data.Description }}></p>
            <div style={{ padding: '10px', fontFamily: 'os-reg' }} dangerouslySetInnerHTML={{ __html: data.Description }} />
            <div className='dpc-button'>
              <p className='dpc-button-text'>Hemen Katıl</p>
            </div>
            <div className='back-button' onClick={() => navigate(-1)}>
              <BackButton />
            </div>
          </div>
        </div>
      }
    </>

  )

}

import React, { useState, useEffect } from 'react'
import './index.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
// import Carousel from 'flat-carousel';
import { useNavigate } from 'react-router-dom'

export default () => {
    const [data, setData] = useState(null)
    const navigate=useNavigate()

    useEffect(() => {
        fetch("https://api.extrazone.com/promotions/list?Channel=PWA", {
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
            <div style={{height: '100%'}}>
                <Carousel
                    showThumbs={false}
                    arrows={false}
                    infinite={false}
                    showStatus={false}
                    className='carousel-images'
                    removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {data.map((image, index) => {
                        return (
                            <>
                                <div className='image0' onClick={()=>navigate('/campaign',{state:image})}>
                                    <div key={index}>
                                        <img className='image1' src={image.ImageUrl} />
                                        <div className='image2' style={{ backgroundColor: image.PromotionCardColor }}>
                                            <img className='image3' src={image.BrandIconUrl} />
                                        </div>
                                        <div className='image4'>
                                            <p className='image5'>{image.RemainingText}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='image6'>{image.RemainingText}</p>
                                    </div>
                                </div>
                                <div className='card-bottom'>
                                    <p className='card-title noselect'>{image.Title}</p>
                                    <p className='card-dahadaha noselect' style={{ color: image.PromotionCardColor }} >Daha Daha</p>
                                </div>
                            </>
                        )
                    })}
                </Carousel>
            </div>
        }
    </>

)

}
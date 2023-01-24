import React, { useState, useEffect } from 'react'
import './index.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default () => {
    const [data, setData] = useState(null)

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
                <div>
                    <Carousel
                        showThumbs={false}
                        arrows={false}
                        infinite={false}
                        removeArrowOnDeviceType={["tablet", "mobile"]}>
                        {data.map((item) => {
                            return (
                                <div>
                                    <div>
                                        <img src={item.ImageUrl || null} />
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>}
        </>

    )

}
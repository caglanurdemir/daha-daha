import React from 'react'
import Header from '../../Components/Header'
import Slider from '../../Components/Slider'
import Cards from '../../Components/Cards'
import Footer from '../../Components/Footer'

export default () => {
  return (
    <div className='main-page'>
      <Header />
      <Slider />
      <Cards />
      <Footer />
    </div>
  )
}
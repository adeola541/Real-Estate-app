import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured"
import FeaturedCard from "../home/featured/FeaturedCard"

const Service = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Service' title='Service -All Services' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Service

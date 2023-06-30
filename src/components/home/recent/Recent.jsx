import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Find  Your Perfect Property' subtitle='Find a home or space choose your desire property on our listing pages' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
import React from 'react'
import img from '../images/about.jpg' 
import Back from '../common/Back'
import RecentCard from '../home/recent/RecentCard'

const blog = () => {
  return (
    <>
      <div className="blog-out mb">
             <Back name ='' title= "" cover ={img} />
             <div className="container recent">
               <RecentCard />
               </div>  
      </div>
    </>
  )
}

export default blog

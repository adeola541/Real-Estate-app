import React from 'react'
import './about.css'
import Back from '../common/Back'
import img from '../image/florian-schmidinger-b_79nOqf95I-unsplash.jpg'
import Heading from '../common/Heading'


const About = () => {
  return (
    <>
     <section className='about'>
               <Back name='About Us' title='About Us - Who We Are?' cover={img} />

               <div className="container flex mtop">
                              <div className="left row">
                                            < Heading title = ' Our Story' subtitle='For what reaason would you purchase your deame home with us'/>

                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                             Ratione inventore laboriosam molestias asperiores ab placeat est perferendis debitis. 
                                             Voluptate unde veniam excepturi ex minus dolorem aspernatur ipsam repudiandae. Cumque, aliquid.</p>

                                             <button className='btn2'> More About Us</button>
                              </div>
                              <div className="right row">
                                             <img src="./immio.jpg" alt="" />
                              </div>
               </div>


     </section>
    </>
  )
}

export default About
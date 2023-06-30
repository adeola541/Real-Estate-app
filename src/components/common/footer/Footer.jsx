import React from 'react'
import './footer.css'
import {footer} from "../../data/Data"
function Footer() {
  return (
    <>
     <section  className='footerContact'>
               <div className="container">
                              <div className="send flex">
                                             <div className="text">
                                                            <h1> Do You Wish To Contact Us?</h1>
                                                            <p>We'll help you to leave in your dream home.</p>
                                             </div>
                                             <button  className ="btn5"> Contact Us Today</button>
                              </div>
               </div>
     </section>


     <footer>
               <div className="container">
                              <div className="box">
                                             <div className="logo">
                                                            <img src="../images/logoreal-removebg-preview.png" alt="" />
                                                            <h2>  Get the most lastest news and specially for you </h2>
                                                            <p> TheHouses</p>


                                                            <div className="input flex">
                                                                           <input type="text"  placeholder='Email Address' name='' id=''/>
                                                                           <button> Subscribe</button>

                                                            </div>
                                             </div>
                              </div>
                              {footer.map((val) => (
                                             <div className="box">
                                                     <h3>{ val.title}</h3>
                                                     <ul>
                                                            { val.text.map((items)=> (
                                                                           <li>{items.list}</li>
                                                            ))}</ul>       
                                             </div>
                              ))}
               </div>
               <div className="legal">
                              <span> © 2022 | TheHouses.com  | All Rights Reserved.</span>
               </div>
     </footer>
    </>
  )
}

export default Footer
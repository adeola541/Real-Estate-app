import React from 'react'
import Back from '../common/Back'
import "./contact.css"
import img from '../image/jacques-bopp-Hh18POSx5qk-unsplash.jpg' 

const contact = () => {
  return (
    <>
       <div className="contact mb">
             <Back name ='Contact Us' title= "Get Helps & Friendly Support" cover ={img} />
             <div className="container">
              <form action="" className='shadow'>
               <h4>Fillup The Form</h4>
               <div>
                              <input type="text" placeholder='Name' name='' id=''/>
                              <input type="text" placeholder='Email' name='' id=''/>

               </div>
               <input type="text" placeholder='Subject' />
               <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Submit Request</button>
              </form>
               </div>  
      </div>
    </>
  )
}

export default contact

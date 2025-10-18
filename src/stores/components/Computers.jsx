import React from 'react'
import { computerData } from '../data/computers'
const Computers = () => {

    const firstFiveImages=computerData.slice(0,5)
  return (
    
      <>
      <div className='proTitle'>

   
    <h2>Computers</h2>
 </div>
       <div className='proSection'>
      {firstFiveImages.map((item)=>{
        return(
            <div className='imgBox' key={item.id}>
                <img src={item.image} alt=""  className='proImage'/>

            </div>

        )
      })}
    </div>
      
      
      
      
      
      
      
      </>

  )
}

export default Computers

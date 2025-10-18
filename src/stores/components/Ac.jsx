import React from 'react'
import {acData} from '../data/ac'
const Ac = () => {
    const firstFiveImages=acData.slice(0,5)
  return (
    <>
    <div className='proTitle'>

   
    <h2>AC</h2>
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

export default Ac

import React from 'react'
import {kitchenData} from '../data/kitchen'
const Kitchen = () => {

    const firstFiveImages=kitchenData.slice(0,5);
  return (
   <>
    <div className='proTitle'>

   
    <h2>kitechen</h2>
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

export default Kitchen

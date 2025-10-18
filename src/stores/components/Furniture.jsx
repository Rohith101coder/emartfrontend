import React from 'react'
import {furnitureData} from '../data/furniture'
const Furniture = () => {

    const firstFiveImages=furnitureData.slice(0,5);
  return (
   <>
   <div className='proTitle'>

   
    <h2>Furnitures</h2>
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

export default Furniture

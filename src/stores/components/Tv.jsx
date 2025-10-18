import React from 'react'
import {tvData} from '../data/tv'
const Tv = () => {
  const firstFiveImages=tvData.slice(0,5);
  return (
    <>
    <div className='proTitle'>

   
    <h2>TV's</h2>
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

export default Tv

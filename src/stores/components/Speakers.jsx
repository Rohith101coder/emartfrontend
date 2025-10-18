import React from 'react'
import {speakerData} from '../data/speaker'
const Speakers = () => {

    const firstFiveImages=speakerData.slice(0,5);
  return (
   <>
   <div className='proTitle'>

   
    <h2>Speakers</h2>
 </div>


   <div className='proSection'>
      {firstFiveImages.map((item , index)=>{
        return(
            <div className='imgBox' key={index}>
                <img src={item.image} alt=""  className='proImage'/>

            </div>

        )
      })}
    </div>
   
   
   
   
   </>
  )
}

export default Speakers
